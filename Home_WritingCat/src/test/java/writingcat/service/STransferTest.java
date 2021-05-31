package writingcat.service;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import org.bson.Document;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import writingcat.utils.PropertyUtil;
import writingcat.entity.CollocationDetail;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static com.mongodb.client.model.Filters.*;

class STransferTest {
    STransfer sTransfer = new STransfer();

    @Test
    void testGsonSpCharacter() {
        Map<String, String> lackedInterpretationMap = new HashMap<>();
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        lackedInterpretationMap.put("make sense", "Religion wants make sense of the world.");
        sTransfer.stringPersistence(STransfer.GSON.toJson(lackedInterpretationMap), new File("./repository/test.json"));
    }

    @Test
    void testInsertFile2MongoAndDelete() throws Exception {
        var jsonFile = new File(PropertyUtil.getProperty("originFilePath"));
        String jsonStr = sTransfer.file2StringBuilder(jsonFile).toString();
        MongoCollection<Document> collection = sTransfer.getClient().getDatabase(PropertyUtil.getProperty("mongodb" +
                ".database")).getCollection(
                "collocationsTest");
        sTransfer.getClient().batchInsert(jsonStr, collection, CollocationDetail[].class);
        DeleteResult deleteResult = collection.deleteMany(gt("id", 0));
        Assertions.assertNotEquals(0, deleteResult.getDeletedCount());
        collection.drop();
    }

}