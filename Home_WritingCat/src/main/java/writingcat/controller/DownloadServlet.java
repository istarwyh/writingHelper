package writingcat.controller;

import com.github.istarwyh.cache.LruCache;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import writingcat.utils.FileUtils;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * @Description: HomeController
 * @Author: YiHui
 * @Date: 2020-11-27 18:12
 * @Version: ing
 */
@Controller
public class DownloadServlet extends HttpServlet {
    private final LruCache<FileInputStream> cache = new LruCache<>(2);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {
        //1.获取请求参数，文件名称
        String filename = request.getParameter("filename");
        //2.使用字节输入流加载文件进内存
        cache.put(filename, new FileInputStream("./repository/" + filename));
        var fis = cache.get(filename);
        //3.设置response的响应头
        //3.1设置响应头类型:content-type
        //获取文件的mime类型
        String mimeType = filename.substring(filename.lastIndexOf(".") + 1);
        response.setHeader("Content-Type", mimeType);
        //3.2设置响应头打开方式:content-disposition
        //解决中文文件名问题
        filename = FileUtils.adaptFileName(request.getHeader("user-agent"), filename);
        response.setHeader("Content-Disposition", "attachment;filename=" + filename);
        //4.将输入流的数据写出到输出流中
        ServletOutputStream sos = response.getOutputStream();
        byte[] buff = new byte[1024 * 8];
        int len = -1;
        while ((len = fis.read(buff)) != -1) {
            sos.write(buff, 0, len);
        }
        fis.close();
        //输出流可以关闭，也可以不关闭
        //如果不关闭，那么tomcat会在响应的时候帮你关闭
    }

    @GetMapping("/downloadServlet")
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            this.doPost(request, response);
        } catch (ServletException | IOException e) {
            e.printStackTrace();
        }
    }
}