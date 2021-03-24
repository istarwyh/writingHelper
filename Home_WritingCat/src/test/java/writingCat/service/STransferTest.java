package writingCat.service;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import writingCat.entity.CollocationDetail;

import java.io.File;
import java.util.ArrayList;

class STransferTest {

    @Test
    void mergeList2File() {
        var sTransfer = new STransfer<>();
        var list = new ArrayList<String>();
        list.add("[{}]");
        System.out.println(sTransfer.mergeFileAndList(new File("./repository/CollocationJson.json"),list));
    }

    @Test
    void gsonStringArray(){
        var cd = CollocationDetail.builder()
                .issues(new String[]{"100","200","300"}).build();
        String gson = new Gson().toJson(cd);
        System.out.println(gson);
    }
}