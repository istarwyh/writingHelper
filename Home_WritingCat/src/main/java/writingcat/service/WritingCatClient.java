package writingcat.service;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 * @Description: WritingCatClient
 * @Author: wx:istarwyh
 * @Date: 2021-04-27 21:12
 * @Version: ing
 */
public class WritingCatClient {
    private static final String seed = "cluster0.jb8de.mongodb.net";
    private static final String username = "Yihui";
    private static final String password = "2w5t8i0p";
    private static final String DEFAULT_CLUSTER = "Cluster0";
    private static final String databaseName = "writingcat";
    private static MongoClient client;

    static {
        loadClient();
    }

    private MongoDatabase database;

    synchronized private static void loadClient() {
        // "mongodb+srv://Yihui:2w5t8i0p@cluster0.jb8de.mongodb.net/Cluster0?retryWrites=true&w=majority"
        String uri = "mongodb+srv://" + username + ":" + password + "@" + seed + "/" + DEFAULT_CLUSTER + "?" +
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
        return this.database = client.getDatabase(databaseName);
    }
}
