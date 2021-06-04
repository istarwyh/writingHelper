package writingcat.dto;

import lombok.Builder;
import lombok.Getter;

/**
 * @Description: Phrases
 * @Author: wx:istarwyh
 * @Date: 2021-04-21 19:59
 * @Version: ing
 */
@Builder
@Getter
public class Phrases {
    private boolean modified;
    private boolean waitModified;
    private String jsonStr;

    public Phrases setJsonStr(String jsonStr) {
        this.jsonStr = jsonStr;
        return this;
    }

    public boolean getModified() {
        return this.modified;
    }

    public void setModified(boolean modified) {
        this.modified = modified;
    }

    public boolean getWaitModified() {
        return this.waitModified;
    }

    public Phrases setWaitModified(boolean waitModified) {
        this.waitModified = waitModified;
        return this;
    }
}
