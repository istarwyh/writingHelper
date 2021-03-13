package spiderJava.controller;

import com.google.gson.Gson;
import com.lkx.util.ExcelUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import spiderJava.entity.excel.CollocationDetail;

import java.io.File;
import java.io.PrintWriter;
import java.util.List;

/**
 * @Description: HomeController
 * @Author: YiHui
 * @Date: 2020-11-27 18:12
 * @Version: ing
 */
@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "redirect:/root";
    }
    @PostMapping(value = "/")
    public String post2Home()  {
        return "forward:/root";
    }
    @GetMapping("/root")
    public String root() {
        return "Home_WritingCat";
    }

    @PostMapping(value = "/upload")
    @ResponseBody
    public String postFile(@RequestParam(value = "file") MultipartFile file) throws Exception {
        excel2Json(file);
        return "<br><h3><font color=\"skyblue\">We will build our collocation repositories<br>           write essays increasingly smartly and freely! :-)</font></h3>";
    }

    /**
     * @param file 注意读取时文件表头可能因为隐藏的格式问题读取失败,此时可重写
     *             todo: 考虑输入格式的各种问题,比如collocation周围空格需要trim
     */
    private void excel2Json(MultipartFile file) throws Exception {
        List<CollocationDetail> excelList = ExcelUtil.readXls(file.getBytes(), CollocationDetail.class);
        var target = new File("./repository/CollocationJson.json");
        var pw = new PrintWriter(target);
        pw.write( new Gson().toJson(excelList));
        pw.close();
    }
}
