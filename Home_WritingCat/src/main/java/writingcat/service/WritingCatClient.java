package writingcat.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.InsertManyOptions;
import org.bson.Document;
import org.springframework.stereotype.Service;
import writingcat.Utils.PropertyUtil;
import writingcat.entity.CollocationDetail;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.exists;
import static com.mongodb.client.model.Sorts.descending;

/**
 * @Description: WritingCatClient
 * @Author: wx:istarwyh
 * @Date: 2021-04-27 21:12
 * @Version: ing
 */
@Service
public class WritingCatClient {
    private static final String SEED = PropertyUtil.getProperty("mongodb.url");
    private static final String USERNAME = PropertyUtil.getProperty("mongodb.username");
    private static final String PASSWORD = PropertyUtil.getProperty("mongodb.password");
    private static final String DEFAULT_CLUSTER = PropertyUtil.getProperty("mongodb.defaultCluster");
    private static final Gson GSON = new GsonBuilder().disableHtmlEscaping().create();
    private static MongoClient client;

    static {
        loadClient();
    }

    synchronized private static void loadClient() {
        // "mongodb+srv://Yihui:2w5t8i0p@cluster0.jb8de.mongodb.net/Cluster0?retryWrites=true&w=majority"
        String uri = "mongodb+srv://" + USERNAME + ":" + PASSWORD + "@" + SEED + "/" + DEFAULT_CLUSTER + "?" +
                "retryWrites=true&w=majority";
        client = MongoClients.create(uri);
    }

    public static void close() {
        client.close();
    }

    /**
     * 获取指定数据库的句柄
     */
    public MongoDatabase getDatabase(String databaseName) {
        if (client == null) {
            loadClient();
        }
        return client.getDatabase(databaseName);
    }

    public void batchInsert(String jsonStr, MongoCollection<Document> collection, Class<?> classOfT) {
        List<Document> list = new ArrayList<>(256);
        Document doc = collection.find(exists("id")).sort(descending("id")).first();
        int i = doc == null ? 0 : (int) doc.get("id") + 1;
        if (classOfT.getName().startsWith("[L") && classOfT.getSimpleName().startsWith("CollocationDetail")) {
            CollocationDetail[] arr = GSON.fromJson(jsonStr, (Type) classOfT);
            for (CollocationDetail c : arr) {
                list.add(Document.parse(c.toJsonStr()).append("id", i++));
            }
        } else {
            throw new UnsupportedOperationException("非CollocationDetail[]暂且不支持插入");
        }
        collection.insertMany(list, new InsertManyOptions().ordered(true));
    }
}
