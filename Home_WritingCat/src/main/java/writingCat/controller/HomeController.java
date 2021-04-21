package writingCat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import writingCat.entity.CollocationDetail;
import writingCat.entity.Interpretation;
import writingCat.service.STransfer;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

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
        String targetPath = "./repository/CollocationJson.json";
        String json = sTransfer.file2String(new File(filePath));
        CollocationDetail[] cdArr = STransfer.GSON.fromJson(json, CollocationDetail[].class);
        var map = new HashMap<String, HashSet<String>>(124);
        for (CollocationDetail c : cdArr) {
            var set = new HashSet<String>(16);
            for (Interpretation i : c.interpretations) {
                set.add(i.Chinese);
            }
            map.put(c.collocation, set);
        }
        String targetJson0 = sTransfer.mergeFileAndList(new File(filePath), sTransfer.tExcel2tList(file));
        cdArr = STransfer.GSON.fromJson(targetJson0, CollocationDetail[].class);
        for (int i = 0; i < cdArr.length; i++) {
            var cur = cdArr[i];
            if (map.containsKey(cur.collocation)) {
                for (Interpretation ips : cur.interpretations) {
                    if (map.get(cur.collocation).contains(ips.Chinese)) {
                        cdArr[i] = null;
                    }
                }
            }
        }
        sTransfer.stringPersistence(STransfer.GSON.toJson(cdArr),
                new File(targetPath));
        return "<br><h3><font color=\"skyblue\">We will build our collocation repositories.<br>           Write " +
                "essays" +
                " increasingly smartly and freely! :-)</font></h3>";
    }
}
