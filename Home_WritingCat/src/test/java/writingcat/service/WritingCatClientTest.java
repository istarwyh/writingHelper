package writingcat.service;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import org.bson.Document;
import org.junit.jupiter.api.Test;
import writingcat.entity.CollocationDetail;
import writingcat.utils.PropertyUtil;

import java.io.File;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.gte;

class WritingCatClientTest {
    private final WritingCatClient client = new WritingCatClient();
    private final MongoCollection<Document> connection = client.getDatabase(PropertyUtil.getProperty("mongodb" +
            ".database"))
            .getCollection(PropertyUtil.getProperty("mongodb.database.collection"));
    private final STransfer sTransfer = new STransfer();

//    @Test
//    void Initial() throws Exception {
//        String originFilePath = PropertyUtil.getProperty("originFilePath");
//        String originJsonStr = sTransfer.file2StringBuilder(new File(originFilePath)).toString();
//        client.batchInsert(originJsonStr, connection, CollocationDetail[].class);
//    }

    @Test
    void seeAllInMongo() {
        for (Document cur : connection.find()) {
            System.out.println(cur.toJson());
        }
    }

    @Test
    void deleteGteId() {
        DeleteResult deleteResult = connection.deleteMany(gte("id", 0));
        System.out.println(deleteResult.getDeletedCount());
    }

    @Test
    void RetrieveInMongo() {
        for (Document doc : connection.find(eq("collocation", "give them more freedom"))) {
            System.out.println(doc.toJson());
        }
    }
}