package writingcat.service;

import com.google.gson.Gson;
import com.lkx.util.ExcelUtil;
import org.bson.Document;
import org.junit.jupiter.api.Test;
import writingcat.entity.CollocationDetail;
import writingcat.entity.Interpretation;
import writingcat.entity.excel.CollocationDetailExcel;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class STransferTest {
    STransfer<Object> sTransfer = new STransfer<>();

    @Test
    void testGsonSpCharacter() {

        Map<String, String> lackedInterpretationMap = new HashMap<>();
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        sTransfer.stringPersistence(STransfer.GSON.toJson(lackedInterpretationMap), new File("./repository/test.json"));
    }

    @Test
    void gsonStringArray() {
        var cd = CollocationDetail.builder()
                .issues(new String[]{"100", "200", "300"}).build();
        String gson = new Gson().toJson(cd);
        System.out.println(gson);
    }

    @Test
    void testInsertFile2Mongo() throws Exception {
        File file = new File("./repository/CollocationJson.json");
        var ins = new FileInputStream(file);
        var list = sTransfer.bytes2List(ins.readAllBytes());
        Document doc = Document.parse(STransfer.GSON.toJson(list));
        sTransfer.getClient().getDatabase("writingcat").getCollection("Collocations").insertOne(doc);
    }
}