package writingCat.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import writingCat.Utils.FileUtils;

import javax.annotation.Resource;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class STransferTest {

    @Test
    void mergeList2File() {
        var sTransfer = new STransfer<>();
        var list = new ArrayList<String>();
        list.add("[{}]");
        System.out.println(sTransfer.mergeFileAndList(new File("./repository/CollocationJson.json"),list));

    }
}