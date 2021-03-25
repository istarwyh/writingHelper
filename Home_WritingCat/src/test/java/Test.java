/**
 * @Description: Test
 * @Author: wx:istarwyh
 * @Date: 2021-03-15 19:43
 * @Version: ing
 */
public class Test {
    @org.junit.jupiter.api.Test
    public void testInsert(){
        TrieTree wordTree = new TrieTree();
        wordTree.insert("dog");
        wordTree.insert("dot");
        wordTree.insert("do");
        wordTree.insert("pump");
        for( var s :wordTree.searchWords("do")){
            System.out.println(s);
        }
    }
}
