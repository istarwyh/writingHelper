package writingcat.entity;

import lombok.Builder;

/**
 * @Description: Interpretation
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:39
 * @Version: ing
 */
@Builder
public class Interpretation {
    public String majority;
    public String Chinese;
    public String English;
    public String sentence;
}
