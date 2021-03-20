package writingCat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import writingCat.entity.CollocationDetail;
import writingCat.service.STransfer;

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

    @PostMapping(value = "/upload")
    @ResponseBody
    public String postFile(@RequestParam(value = "file") MultipartFile file) throws Exception {
        String filePath = "./repository/CollocationJson.json";
        String filePath2 = "./repository/CollocationJson.json";
        sTransfer.stringPersistence(sTransfer.mergeFileAndList(new File(filePath), sTransfer.tExcel2tList(file)),
                new File(filePath2));
        return "<br><h3><font color=\"skyblue\">We will build our collocation repositories.<br>           Write " +
                "essays" +
                " increasingly smartly and freely! :-)</font></h3>";
    }
}
