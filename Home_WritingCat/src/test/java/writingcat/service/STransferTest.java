package writingcat.service;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import writingcat.entity.CollocationDetail;
import writingcat.entity.Interpretation;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class STransferTest {

    @Test
    void testGsonSpCharacter() {
        var sTransfer = new STransfer<>();
        Map<String, String> lackedInterpretationMap = new HashMap<>();
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        sTransfer.stringPersistence(STransfer.GSON.toJson(lackedInterpretationMap), new File("./repository/test.json"));
    }

    @Test
    void gsonStringArray(){
        var cd = CollocationDetail.builder()
                .issues(new String[]{"100","200","300"}).build();
        String gson = new Gson().toJson(cd);
        System.out.println(gson);
    }
}