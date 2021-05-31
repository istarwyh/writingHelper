package writingcat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

/**
 * @Description: SpringBoot自动配置了支持mongodb。在启动SpringBoot时会自动实例化一个mongo实例，需要禁用自动配置 。
 * @Author: YiHui
 * @Date: 2020-11-27 18:09
 * @Version: ing
 */
@SpringBootApplication(exclude = MongoAutoConfiguration.class)
public class WritingCatApplication {
    public static void main(String[] args) {
//        默认启动端口:127.0.0.1:8080
        SpringApplication.run(WritingCatApplication.class, args);
    }
}
