package writingcat.utils;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

class PropertyUtilTest {
    @Test
    void testGetProps() {
        Assertions.assertEquals("writingcat", PropertyUtil.getProperty("mongodb.database"));
    }

    @Test
    void main() throws Exception {
        //返回读取指定资源的输入流
        InputStream is = this.getClass().getResourceAsStream("application.yml");
        assert is != null;
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String s = "";
        while ((s = br.readLine()) != null)
            System.out.println(s);

    }

}
