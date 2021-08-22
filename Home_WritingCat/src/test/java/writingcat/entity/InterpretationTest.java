package writingcat.entity;

import com.google.gson.Gson;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class InterpretationTest {

    @Test
    void testEquals() {
        Interpretation[] ips1 = new Interpretation[]{
                Interpretation.builder().English("   ").Chinese("给他们更多的自由").sentence("Should children be given more " +
                        "freedom?").build()
        };
        Interpretation[] ips2 = new Interpretation[]{
                Interpretation.builder().Chinese("给他们更多的自由").sentence("Should children be given more freedom?").build(),
                Interpretation.builder().English("333").build()
        };
        System.out.println(ips1[0].equals(ips2[0]));
        String jsonStr1 = "      {\n" +
                "        \"majority\": \"0\",\n" +
                "        \"Chinese\": \"给他们更多的自由\",\n" +
                "        \"English\": \"\",\n" +
                "        \"sentence\": \"Should children be given more freedom?\"\n" +
                "      }";
        String jsonStr2 = "      {\n" +
                "        \"majority\": \"0\",\n" +
                "        \"Chinese\": \"给他们更多的自由\",\n" +
                "        \"sentence\": \"Should children be given more freedom?\"\n" +
                "      }";
        ips1[0] = new Gson().fromJson(jsonStr1, Interpretation.class);
        ips2[0] = new Gson().fromJson(jsonStr2, Interpretation.class);
        Assertions.assertEquals(ips1[0],ips2[0]);
    }
}