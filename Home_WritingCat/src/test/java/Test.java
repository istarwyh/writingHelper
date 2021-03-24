/**
 * @Description: Test
 * @Author: wx:istarwyh
 * @Date: 2021-03-15 19:43
 * @Version: ing
 */
public class Test {
    @org.junit.jupiter.api.Test
    public void t1(){
        TrieTree wordTree = new TrieTree();
        wordTree.insert("dog");
        wordTree.insert("dot");
        wordTree.insert("do");
        wordTree.insert("pump");
        for( var s :wordTree.searchWords("do")){
            System.out.println(s);
        }
    }
    @org.junit.jupiter.api.Test
    public void t2(){
        String s = "work's closely with";
        System.out.println(s.charAt(4));
    }
}
