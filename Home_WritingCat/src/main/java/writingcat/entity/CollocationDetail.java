package writingcat.entity;

import com.mongodb.client.MongoCollection;
import lombok.Builder;
import org.bson.Document;
import writingcat.service.STransfer;

import java.util.Arrays;

/**
 * @Description: CollocationDetail
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:34
 * @Version: ing
 */
@Builder
public class CollocationDetail {
    public String[] issues;
    public String collocation;
    public String[] wordKeys;
    public String note;
    public Interpretation[] interpretations;

    public String toJsonStr() {
        return STransfer.GSON.toJson(this, CollocationDetail.class);
    }

    public static boolean equals(Document a, Document b) {
        if (a == null || b == null) {
            return false;
        } else if (a.get("id").equals(b.get("id"))) {
            return true;
        } else {
            return a.get("collocation").equals(b.get("collocation")) &&
                    filedEqual(a, b, "issues") &&
                    filedEqual(a, b, "wordKeys") &&
                    filedEqual(a, b, "interpretations");
        }
    }

    private static boolean filedEqual(Document a, Document b, String fieldName) {
        return Arrays.equals((String[]) a.get(fieldName), (String[]) b.get(fieldName));
    }

    public void insertInMongo(STransfer sTransfer) {
        MongoCollection<Document> collection = sTransfer.getClient().getDatabase("writingcat").getCollection(
                "collocations");
        collection.insertOne(Document.parse(this.toJsonStr()));
    }
}
