package writingcat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import writingcat.Utils.FileUtils;
import writingcat.entity.CollocationDetail;
import writingcat.service.STransfer;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * @Description: HomeController
 * @Author: YiHui
 * @Date: 2020-11-27 18:12
 * @Version: ing
 */
@Controller
public class HomeController {
    @Resource
    STransfer<CollocationDetail> sTransfer;

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

    @ResponseBody
    @PostMapping(value = "/upload")
    public String postFile(@RequestParam(value = "file") MultipartFile file) throws Exception {
        String originFilePath = "./repository/CollocationJson.json";
        String targetPath = "./repository/CollocationJson.json";
        var phrases = sTransfer.mergeFile(new File(originFilePath), file);
        sTransfer.stringPersistence(phrases.jsonStr, new File(targetPath));
//        todo:应该在lackedInterpretations之后追加新的不一样的Interpretations,后面引入mongodb可以解决连续持久化的问题
        sTransfer.stringPersistence(STransfer.GSON.toJson(phrases.lackedInterpretationMap), new File("./repository" +
                "/lackedInterpretations.json"));
        return "<br><h3><font color=\"skyblue\">We will build our collocation repositories.<br>           Write " +
                "essays" +
                " increasingly smartly and freely! :-)</font></h3>";
    }
}
