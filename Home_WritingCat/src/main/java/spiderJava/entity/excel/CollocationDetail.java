package spiderJava.entity.excel;

import com.lkx.util.Excel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Description: This can not use Builder Pattern, because this entity class should have filed with one to one.
 * @Author: wx:istarwyh
 * @Date: 2021-03-12 19:53
 * @Version: ing
 */
@Getter
@Setter
@ToString
public class CollocationDetail {
    @Excel( title = "Area")
    private String area;
    @Excel( title = "Collocation")
    private String collocation;
    @Excel( title = "Interpretation")
    private String interpretation;
    @Excel(title = "Note")
    private String note;
}
