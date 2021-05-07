package writingcat.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

/**
 * @Description: Interpretation
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:39
 * @Version: ing
 */
@Builder
@Getter
@Setter
public class Interpretation {
    private final String majority;
    private String Chinese;
    private String English;
    private String sentence;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Interpretation)) {
            return false;
        }
        Interpretation that = (Interpretation) o;
        return equals(getChinese(), that.getChinese()) &&
                equals(getEnglish(), that.getEnglish()) &&
                equals(getSentence(), that.getSentence());
    }

    /**
     * @return s1/s2都为空;s1/s2都为Blank(但是注意null不能调用isBlank());s1与s2内容相等
     */
    private boolean equals(String s1, String s2) {
        if (s1 == null && s2 == null) {
            return true;
        } else if (s1 != null && s1.isBlank()) {
            return s2 == null || s2.isBlank();
        } else {
            return s1 != null && s1.equals(s2);
        }
    }

    @Override
    public int hashCode() {
        return Objects.hash(getChinese());
    }

    public void update(Interpretation ip) {
        this.setChinese(ip.getChinese());
        this.setEnglish(ip.getEnglish());
        this.setSentence(ip.getSentence());
    }
}
