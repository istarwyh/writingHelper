/**
 * @Description: Test
 * @Author: wx:istarwyh
 * @Date: 2021-03-15 19:43
 * @Version: ing
 */
public class Test {
    @org.junit.jupiter.api.Test
    public void t1(){
        TrieTree trieTree = new TrieTree();
        trieTree.insert("dog");
        trieTree.insert("dot");
        trieTree.insert("do");
        trieTree.insert("pump");
        for( var s :trieTree.searchWords("do")){
            System.out.println(s);

        }
    }
}
