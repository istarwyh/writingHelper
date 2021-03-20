package writingCat.service;

import com.google.gson.Gson;
import com.lkx.util.ExcelUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import writingCat.entity.CollocationDetail;
import writingCat.entity.Interpretation;
import writingCat.entity.excel.CollocationDetailExcel;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @Description: STransfer
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:18
 * @Version: ing
 */
@Service
public class STransfer<T> {
    /**
     * @param file 注意读取时文件表头可能因为隐藏的格式问题读取失败,此时可重写
     *             todo: 考虑输入格式的各种问题,比如collocation周围空格需要trim
     *             todo: 能不能把参数当类型传进去?像T
     */
    public List<?> excel2Json(MultipartFile file) throws Exception {
        List<CollocationDetailExcel> excelList = ExcelUtil.readXls(file.getBytes(), CollocationDetailExcel.class);
        var cd = new ArrayList<CollocationDetail>(128);
        AtomicInteger i = new AtomicInteger();
        excelList.forEach(row -> {
            var tmpArray = new Interpretation[1];
            tmpArray[0] =
                    Interpretation.builder()
                            .majority(row.getMajority())
                            .Chinese(row.getChinese())
                            .English(row.getEnglish())
                            .sentence(row.getSentence()).build();
            cd.add(i.getAndIncrement(),
                    CollocationDetail.builder()
                            .issues(row.getIssue()
                                    .split(","))
                            .collocation(row.getCollocation())
                            .wordKeys(row.getWordKey().split(","))
                            .note(row.getNote())
                            .interpretations(tmpArray).build());
        });
        return cd;
    }

    public void mergerJsonArray(){

    }
    public void persistence(List<?> list, String targetPath){
        var target = new File(targetPath);
        PrintWriter pw = null;
        try {
            pw = new PrintWriter(target);
            pw.write(new Gson().toJson(list));
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
