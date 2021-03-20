package writingCat.Utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
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

}
