package writingcat.utils;

import writingcat.service.STransfer;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * @Description: PropertyUtil
 * @Author: wx:istarwyh
 * @Date: 2021-05-03 16:05
 * @Version: ing
 */
public class PropertyUtil {
    private static Map<String, String> configMap;

    static {
        loadProps();
    }

    synchronized static private void loadProps() {
        configMap = new HashMap<>(16);
        var st = new STransfer();
        try {
//            File file = new File("./src/main/resources/application.yml");
            InputStream is = PropertyUtil.class.getResourceAsStream("/application.yml");
            String[] ss = st.inputStream2StringBuilder(is).toString().split("\n");
            for (String s : ss) {
                int splitIndex = s.indexOf(":");
                String key = s.substring(0, splitIndex);
                String value = s.substring(splitIndex + 1);
                configMap.put(key, value);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getProperty(String key) {
        if (null == configMap) {
            loadProps();
        }
        return configMap.get(key);
    }

}
