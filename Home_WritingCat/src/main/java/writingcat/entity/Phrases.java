package writingcat.entity;

import lombok.Builder;

import java.util.List;
import java.util.Map;

/**
 * @Description: Phrases
 * @Author: wx:istarwyh
 * @Date: 2021-04-21 19:59
 * @Version: ing
 */
@Builder
public class Phrases {
    public String jsonStr;
    public Map<String, List<Interpretation>> lackedInterpretationMap;
}
