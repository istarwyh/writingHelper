package writingcat.service;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.InsertManyOptions;
import com.mongodb.client.result.DeleteResult;
import org.bson.Document;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import writingcat.entity.CollocationDetail;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.mongodb.client.model.Filters.gt;

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
    void testInsertFile2MongoAndDelete() throws Exception {
        var jsonFile = new File("./repository/CollocationJson.json");
        String jsonStr = sTransfer.jsonFile2StringBuilder(jsonFile).toString();
        List<Document> list = new ArrayList<>(256);
        int i = 0;
        for (CollocationDetail c : STransfer.GSON.fromJson(jsonStr, CollocationDetail[].class)) {
            list.add(Document.parse(c.toJsonStr()).append("id", i++));
        }
        var insertManyOptions = new InsertManyOptions().ordered(true);
        MongoCollection<Document> collection = sTransfer.getClient().getDatabase("writingcat").getCollection(
                "CollocationsTest");
        collection.insertMany(list, insertManyOptions);
        DeleteResult deleteResult = collection.deleteMany(gt("id", 0));
        Assertions.assertEquals(i - 1, deleteResult.getDeletedCount());
        collection.drop();
    }

    @Test
    void seeAllInMongo() {
        for (Document cur : sTransfer.getClient().getDatabase("writingcat").getCollection("collocations").find()) {
            System.out.println(cur.toJson());
        }
    }
}