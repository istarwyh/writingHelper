package writingcat.entity;

import com.mongodb.client.MongoCollection;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.bson.Document;
import writingcat.service.STransfer;

import java.util.Arrays;
import java.util.Set;

/**
 * @Description: CollocationDetail
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:34
 * @Version: ing
 */
@Builder
@Getter
@Setter
public class CollocationDetail {
    private String[] issues;
    private final String collocation;
    private String[] wordKeys;
    private final String note;
    private Interpretation[] interpretations;
    private boolean modified;

    public String toJsonStr() {
        return STransfer.GSON.toJson(this, CollocationDetail.class);
    }

    public boolean equals(CollocationDetail t) {
        if (t == null) {
            return false;
        }
        return this.getCollocation().equals(t.getCollocation()) &&
                Arrays.equals(this.getInterpretations(), t.getInterpretations());
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

    public void setWordKeysBySet(Set<String> set) {
        if (set.size() == this.getWordKeys().length) {
            return;
        }
        this.setWordKeys(new String[set.size()]);
        int index = 0;
        for (String ip : set) {
            this.getWordKeys()[index++] = ip;
        }
        modified = true;
    }

    public void setIssuesBySet(Set<String> set) {
        if (set.size() == this.getIssues().length) {
            return;
        }
        this.setIssues(new String[set.size()]);
        int index = 0;
        for (String ip : set) {
            this.getIssues()[index++] = ip;
        }
        modified = true;
    }

    public void setInterpretationsBySet(Set<Interpretation> set) {
        if (set.size() == this.getInterpretations().length) {
            return;
        }
        this.setInterpretations(new Interpretation[set.size()]);
        int index = 0;
        for (Interpretation ip : set) {
            this.getInterpretations()[index++] = ip;
        }
        modified = true;
    }

    public void insertInMongo(MongoCollection<Document> collection) {
        collection.insertOne(Document.parse(this.toJsonStr()));
    }

    public boolean getModified() {
        return this.modified;
    }
}
