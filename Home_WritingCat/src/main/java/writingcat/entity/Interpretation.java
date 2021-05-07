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
        return getChinese().equals(that.getChinese());
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
