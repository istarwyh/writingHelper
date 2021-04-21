import com.lkx.util.ExcelUtil;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import writingCat.entity.excel.CollocationDetailExcel;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @Description: Test
 * @Author: wx:istarwyh
 * @Date: 2021-03-15 19:43
 * @Version: ing
 */
public class Test {
    private static final String driverPath = "H:\\Code\\webdriver-master\\geckodriver.exe";
    private static final String SourceUrl = "https://quizlet.com/cn/298383541/120%E6%80%A5%E6%95%91%E7%9F%AD%E8%AF%AD" +
            "-flash-cards/";
    private static final String css = "";
    private static final String className1 = "SetPageTerms-termsList";
    private static final String className2 = "SetPageTerms-terms";
    private static final String FinishFlag = "SiteFooter";

    @org.junit.jupiter.api.Test
    public void testInsert() {
        TrieTree wordTree = new TrieTree();
        wordTree.insert("dog");
        wordTree.insert("dot");
        wordTree.insert("do");
        wordTree.insert("pump");
        for (var s : wordTree.searchWords("do")) {
            System.out.println(s);
        }
    }

    @org.junit.jupiter.api.Test
    void getCollocationsDetails() throws Exception {
        List<CollocationDetailExcel> allCollocations = new ArrayList<>(1024);
//        Access denied:
//            Document doc = Jsoup.connect(SourceUrl)
//                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
//                    Chrome/89.0.4389.128 Safari/537.36")
//                    .cookie("AxWnSXJ8BkdOnTyyBbt2dLk", "0")
//                    .get();
        WebDriver webDriver = getHomePage(SourceUrl, FinishFlag, false);
        webDriver.findElement(By.className(className1)).click();
        List<WebElement> webElements = webDriver.findElements(By.className(className1));
        String[] ss = webElements.get(0).getText().split("\n");
        for (int i = 0; i < ss.length - 1; i += 2) {
            var cd = new CollocationDetailExcel();
            cd.setMajority("0");
            cd.setCollocation(ss[i]);
            cd.setChinese(ss[i + 1]);
            cd.setIssue("undefined");
            cd.setWordKey(ss[i].split(" ")[0]);
            allCollocations.add(cd);
        }
        webDriver.close();
        String targetPath = "./repository/tmp.xlsx";
        ExcelUtil.exportExcel(targetPath, allCollocations, CollocationDetailExcel.class);
    }

    private WebDriver getHomePage(String sourceUrl, String finishFlag, Boolean isDisplay) {
        WebDriver webDriver = getFirefoxWebDriver();
//        防止因为打开页面过多的域外广告连接而超时
        webDriver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
        webDriver.get(sourceUrl);
        waitPageLoad(webDriver, finishFlag);
        return webDriver;
    }

    private WebDriver getFirefoxWebDriver() {
//            环境变量
        System.setProperty("webdriver.gecko.driver", driverPath);
        FirefoxOptions firefoxOptions = new FirefoxOptions();
//        FireFox支持无头浏览器模式
//        firefoxOptions.addArguments("-headless");
//            打开火狐浏览器的一些设置
        WebDriver webDriver = new FirefoxDriver(firefoxOptions);
        webDriver.manage().window().setSize(new Dimension(1000, 1000));
//            左上角的位置
        webDriver.manage().window().setPosition(new Point(326, 40));
        return webDriver;
    }

    /**
     * 直到timeOut时间到了之前,一直寻找findElement()中的内容
     * 等待网页加载完成:等待js网页跳转
     */
    private static void waitPageLoad(WebDriver webDriver, final String finishFlag) {
        WebDriverWait wait = new WebDriverWait(webDriver, 30);
        wait.until(new ExpectedCondition<WebElement>() {
            @Override
            public WebElement apply(WebDriver d) {
//          有八种元素定位方法: d, name, class name, tag name, link text,部分link text, xpath, css选择器
                return d.findElement(By.className(finishFlag));
            }
        });
    }
}
