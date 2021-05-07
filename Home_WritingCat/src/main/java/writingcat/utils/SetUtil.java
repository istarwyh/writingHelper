package writingcat.utils;

import writingcat.entity.Interpretation;

import java.util.Arrays;
import java.util.HashSet;

/**
 * @Description: SetUtils
 * @Author: wx:istarwyh
 * @Date: 2021-05-07 14:28
 * @Version: ing
 */
public class SetUtil {
    /**
     * @return 两个数组的不重复元素的并集
     */
    public static HashSet<Interpretation> getUniqUnion(Interpretation[] ips1, Interpretation[] ips2) {
        var tmpSet = new HashSet<Interpretation>(4);
        tmpSet.addAll(Arrays.asList(ips1));
        tmpSet.addAll(Arrays.asList(ips2));
        return tmpSet;
    }

    /**
     * @return 两个数组的不重复元素的并集
     */
    public static HashSet<String> getUniqUnion(String[] ss1, String[] ss2) {
        var tmpSet = new HashSet<String>(4);
        tmpSet.addAll(Arrays.asList(ss1));
        tmpSet.addAll(Arrays.asList(ss2));
        return tmpSet;
    }
}
