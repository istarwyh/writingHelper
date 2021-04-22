package writingcat.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.lkx.util.ExcelUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import writingcat.entity.CollocationDetail;
import writingcat.entity.Interpretation;
import writingcat.entity.Phrases;
import writingcat.entity.excel.CollocationDetailExcel;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @Description: STransfer
 * @Author: wx:istarwyh
 * @Date: 2021-03-19 02:18
 * @Version: ing
 */
@Service
public class STransfer<T> {
    /**
     * 关于gson将特殊字符转为utf编码问题: https://my.oschina.net/u/998693/blog/423658
     */
    public static final Gson GSON = new GsonBuilder().disableHtmlEscaping().create();

    /**
     * @param file MultipartFile是Spring提供的一个接口，用来接收multipart／form-data类型 请求方式中即将上传的文件，为处理或保存文件
     *             注意读取时文件表头可能因为隐藏的格式问题读取失败,此时可重写
     *             todo: 考虑输入格式的各种问题,比如collocation周围空格需要trim
     *             todo: 能不能把参数当类型传进去?像T
     */
    public List<CollocationDetail> tExcel2tList(MultipartFile file) {
        List<CollocationDetailExcel> excelList = new ArrayList<>();
        try {
            excelList = ExcelUtil.readXls(file.getBytes(), CollocationDetailExcel.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        var cd = new ArrayList<CollocationDetail>(128);
        AtomicInteger i = new AtomicInteger();
        excelList.forEach(row -> {
//            为了符合interpretations的定义,方便最后在被读取的时候合并
            var tmpArray = new Interpretation[1];
            tmpArray[0] =
                    Interpretation.builder()
                            .majority(row.getMajority())
                            .Chinese(row.getChinese())
                            .English(row.getEnglish())
                            .sentence(row.getSentence()).build();
            cd.add(i.getAndIncrement(),
                    CollocationDetail.builder()
                            .issues(row.getIssue().split(","))
                            .collocation(row.getCollocation())
                            .wordKeys(row.getWordKey().split(","))
                            .note(row.getNote())
                            .interpretations(tmpArray).build());
        });
        return cd;
    }

    /**
     * 在同一个抽象层面上封装API--List && File
     */
    public Phrases mergeFile(File jsonFile, MultipartFile file) {
        try {
            var originSb = jsonFile2StringBuilder(jsonFile);
            var map = jsonString2Map(originSb.toString());
            var list = this.tExcel2tList(file);
            var appendInterpretationMap = new HashMap<String, List<Interpretation>>(16);
            for (int i = list.size() - 1; i >= 0; i--) {
                var cur = list.get(i);
                if (map.containsKey(cur.collocation)) {
                    boolean flag = true;
                    var tmpList = new ArrayList<Interpretation>();
                    for (Interpretation ips : cur.interpretations) {
                        if (map.get(cur.collocation).contains(ips.Chinese)) {
                            flag = false;
                        } else {
                            tmpList.add(ips);
                        }
                        list.remove(i);
                    }
                    if (flag) {
                        appendInterpretationMap.put(cur.collocation, tmpList);
                    }
                }
            }
            var jsonStr1 = modifyStringBuilder(originSb);
            var jsonStr2 = GSON.toJson(list).substring(1);
            return Phrases.builder().jsonStr(jsonStr1 + jsonStr2).lackedInterpretationMap(appendInterpretationMap).build();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Map<String, HashSet<String>> jsonString2Map(String jsonStr) {
        CollocationDetail[] cdArr = STransfer.GSON.fromJson(jsonStr, CollocationDetail[].class);
        var map = new HashMap<String, HashSet<String>>(124);
        for (CollocationDetail c : cdArr) {
            var set = new HashSet<String>(16);
            for (Interpretation i : c.interpretations) {
                set.add(i.Chinese);
            }
            map.put(c.collocation, set);
        }
        return map;
    }

    public String modifyStringBuilder(StringBuilder sb) throws IOException {
        sb.deleteCharAt(sb.length() - 1);
        sb.append(",");
        return sb.toString();
    }

    private StringBuilder jsonFile2StringBuilder(File jsonFile) throws IOException {
        //            var fr = new FileReader(targetFile);
        var fileReader = new InputStreamReader(new FileInputStream(jsonFile), StandardCharsets.UTF_8);
        var sb = new StringBuilder();
        int ch = -1;
        int i = 0;
        var buffer = new char[1024];
        while ((ch = fileReader.read()) != -1) {
            if (i < 1024) {
                buffer[i++] = (char) ch;
            } else {
                sb.append(buffer).append((char) ch);
                i = 0;
//                    new一个和逐个为空,一个消耗内存,一个消耗资源吧
                buffer = new char[1024];
            }
        }
//                当buffer数组没有满的时候:
        if (i > 0) {
            for (int j = 0; j < i; j++) {
                sb.append(buffer[j]);
            }
        }
        fileReader.close();
        return sb;
    }

    /**
     * gson序列化的实体类不需要使用annotation来标识需要序列化的字段，同时gson又可以通过使用annotation来灵活配置需要序列化的字段。
     */
    public void stringPersistence(String s, File targetFile) {
        try (PrintWriter pw = new PrintWriter(targetFile)) {
            pw.write(s);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}