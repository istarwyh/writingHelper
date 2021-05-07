package writingcat.utils;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class PropertyUtilTest {
    @Test
    void testGetProps() {
        Assertions.assertEquals("writingcat", PropertyUtil.getProperty("mongodb.database"));
    }
}