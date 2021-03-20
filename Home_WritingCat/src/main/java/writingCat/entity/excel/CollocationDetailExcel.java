package writingCat.entity.excel;

import com.lkx.util.Excel;
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
public class CollocationDetailExcel {
    @Excel( title = "issue")
    private String issue;
    @Excel( title = "collocation")
    private String collocation;
    @Excel( title = "wordKey")
    private String wordKey;
    @Excel(title = "note")
    private String note;
    @Excel( title = "majority")
    private String majority;
    @Excel(title = "Chinese")
    private String Chinese;
    @Excel(title = "English")
    private String English;
    @Excel(title = "sentence")
    private String sentence;
}
