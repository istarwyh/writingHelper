package writingcat.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

import static org.apache.xmlbeans.impl.common.XBeanDebug.log;

/**
 * @Description: FileUtils
 * @Author: wx:istarwyh
 * @Date: 2021-03-20 15:27
 * @Version: ing
 */
public class FileUtils {
    /**
     * 通过FileOutputStream转化
     *
     * @param multipartFile 框架上传的文件格式
     */
    public static void multiFile2File(MultipartFile multipartFile) {
        File file = new File(Objects.requireNonNull(multipartFile.getOriginalFilename()));
        try (OutputStream out = new FileOutputStream(file)) {
//            或者获取文件流，以文件流的方式输出到新文件?
//            InputStream in = multipartFile.getInputStream();
            for (byte b : multipartFile.getBytes()) {
                out.write(b);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 利用File构造个对象当工具删除转化过程中自动生成的文件
        log(new File(file.toURI()).delete() ? "删除成功" : "删除失败");
    }

    public static String adaptFileName(String userAgent, String fileName) throws UnsupportedEncodingException {
        //IE浏览器
        if (userAgent.contains("MSIE")) {
            fileName = URLEncoder.encode(fileName, StandardCharsets.UTF_8);
            //google,火狐浏览器
        } else if (userAgent.contains("Mozilla")) {
            fileName = new String(fileName.getBytes(), "ISO8859-1");
        } else {
            fileName = URLEncoder.encode(fileName, StandardCharsets.UTF_8);
        }
        return fileName;
    }

    public static String sureFilePath(String filePath) {
        File f = new File(filePath);
        File fp = new File(f.getParent());
        if (!fp.exists()) {
            fp.mkdirs();
        }
        if (!f.exists()) {
            try {
                f.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return filePath;
    }
}
