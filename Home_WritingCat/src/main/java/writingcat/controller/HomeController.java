package writingcat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import writingcat.utils.PropertyUtil;
import writingcat.entity.CollocationDetail;
import writingcat.entity.Phrases;
import writingcat.service.STransfer;

import javax.annotation.Resource;
import java.io.File;

/**
 * @Description: HomeController
 * @Author: YiHui
 * @Date: 2020-11-27 18:12
 * @Version: ing
 */
@Controller
public class HomeController {
    @Resource
    STransfer sTransfer;

    @GetMapping("/")
    public String home() {
        return "redirect:/root";
    }

    @PostMapping(value = "/")
    public String post2Home() {
        return "forward:/root";
    }

    @GetMapping("/root")
    public String root() {
        return "Home_WritingCat";
    }

    /**
     * @param file MultipartFile是Spring提供的一个接口，用来接收multipart／form-data类型 请求方式中即将上传的文件，为处理或保存文件
     *             注意读取时文件表头可能因为隐藏的格式问题读取失败,此时可重写
     */
    @ResponseBody
    @PostMapping(value = "/upload")
    public String postFile(@RequestParam(value = "file") MultipartFile file) throws Exception {
        String originFilePath = PropertyUtil.getProperty("originFilePath");
        String targetPath = PropertyUtil.getProperty("targetPath");
        Phrases phrases = sTransfer.mergeFile(new File(originFilePath), file, CollocationDetail[].class);
        sTransfer.stringPersistence(phrases.jsonStr, new File(targetPath));
//        todo:应该在lackedInterpretations之后追加新的不一样的Interpretations,后面引入mongodb可以解决连续持久化的问题
        sTransfer.stringPersistence(STransfer.GSON.toJson(phrases.lackedInterpretationMap), new File("./repository" +
                "/lackedInterpretations.json"));
        return "<br><h3><font color=\"skyblue\">We will build our collocation repositories.<br>           Write " +
                "essays increasingly smartly and freely! :-)</font></h3>";
    }
}
