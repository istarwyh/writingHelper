package writingCat.entity;

import lombok.Builder;

/**
 * @Description: CollocationDetail
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:34
 * @Version: ing
 */
@Builder
public class CollocationDetail {
    public String[] issues;
    public String collocation;
    public String[] wordKeys;
    public String note;
    public Interpretation[] interpretations;
}
