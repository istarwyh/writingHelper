import com.mongodb.ServerAddress;
import com.mongodb.client.*;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.junit.jupiter.api.Test;
import writingcat.service.WritingCatClient;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import static com.mongodb.client.model.Accumulators.sum;
import static com.mongodb.client.model.Aggregates.*;
import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Projections.excludeId;
import static com.mongodb.client.model.Sorts.descending;
import static com.mongodb.client.model.Updates.inc;
import static com.mongodb.client.model.Updates.set;
import static java.util.Arrays.asList;
import static java.util.Collections.singletonList;

/**
 * @Description: TestMongo
 * @Author: https://github.com/mongodb/mongo-java-driver/blob/master/driver-sync/src/examples/tour/QuickTour.java
 * @Date: 2021-04-23 23:09
 * @Version: ing
 */
public class TestMongo {
    WritingCatClient client = new WritingCatClient();

    private static void multiPlyPrint(MongoCollection<Document> collection, Consumer<Document> printBlock) {
        collection.aggregate(asList(
                match(gt("i", 0)),
                project(Document.parse("{ITimes10: {$multiply: ['$i', 10]}}")))
        ).forEach(printBlock);
    }

    /**
     * make a document and insert it
     *
     * @param collection MongoCollection<Document>
     */
    private static void oneInsert(MongoCollection<Document> collection) {
        Document doc = new Document("name", "MongoDB")
                .append("type", "database")
                .append("count", 1)
                .append("info", new Document("x", 203).append("y", 102));
        collection.insertOne(doc);
    }

    private static void blockPrint(MongoCollection<Document> collection, Consumer<Document> printBlock) {
        collection.find(and(gt("i", 0), lte("i", 100))).forEach(
                printBlock
        );
    }

    /**
     * $gt matches values that are greater than a specified value.
     * $lte selects the documents where the value of the field is less than or equal to (i.e. <=) the
     * specified value.
     *
     * @param collection MongoCollection<Document>
     */
    private static void cursorPrint(MongoCollection<Document> collection) {
        try (MongoCursor<Document> cursor = collection.find(and(gt("i", 5), lte("i", 10))).iterator()) {
            while (cursor.hasNext()) {
                System.out.println(cursor.next().toJson());
            }
        }
    }

    private static void batchInserted(MongoCollection<Document> collection) {
        // now, lets add lots of little documents to the collection so we can explore queries and cursors
        List<Document> documents = new ArrayList<Document>();
        for (int i = 0; i < 10; i++) {
            documents.add(new Document("i", i));
        }
        collection.insertMany(documents);
        System.out.println("total # of documents after inserting 100 small ones (should be 11) " + collection.countDocuments());
    }

    private static void allRetrieve(MongoCollection<Document> collection) {
        try (MongoCursor<Document> cursor = collection.find().iterator()) {
            while (cursor.hasNext()) {
                System.out.println(cursor.next().toJson());
            }
        }
    }

    @Test
    void testCRUD() {
        MongoDatabase database = client.getDatabase("writingcat");
        MongoCollection<Document> collection = database.getCollection("test");
        collection.drop();
//        oneInsert(collection);
        batchInserted(collection);
//        allRetrieve(collection);
        Document myDoc;
        myDoc = collection.find().first();
        myDoc = collection.find(eq("i", 71)).first();
//        cursorPrint(collection);
        Consumer<Document> printBlock = document -> System.out.println(document.toJson());
//        blockPrint(collection, printBlock);
        myDoc = collection.find(exists("i")).sort(descending("i")).first();
        // Projection
        myDoc = collection.find().projection(excludeId()).first();
        assert myDoc != null;
        System.out.println(myDoc.toJson());
        System.out.println("---------------------------------------------------");
//        multiPlyPrint(collection, printBlock);
        myDoc = collection.aggregate(singletonList(group(null, sum("total", "$i")))).first();
        collection.updateOne(eq("i", 1), set("i", 11));
        UpdateResult updateResult = collection.updateMany(lt("i", 11), inc("i", 10));
        System.out.println(updateResult.getModifiedCount());
        blockPrint(collection, printBlock);
        System.out.println("---------------------------------------------------");

        collection.deleteOne(eq("i", 11));
        DeleteResult deleteResult = collection.deleteMany(gte("i", 10));
        System.out.println(deleteResult.getDeletedCount());
        blockPrint(collection, printBlock);
        System.out.println("---------------------------------------------------");

        collection.createIndex(new Document("i", 1));
//        database.drop();
//        client.close();
    }
}
