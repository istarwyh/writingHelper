package writingcat.entity;

import lombok.Builder;
import writingcat.service.STransfer;

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

    public String toJsonStr() {
        return STransfer.GSON.toJson(this, CollocationDetail.class);
    }
}
