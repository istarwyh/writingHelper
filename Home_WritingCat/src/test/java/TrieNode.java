import java.util.HashMap;
import java.util.Map;

/**
 * @Description: TestTrieTree
 * @Author: wx:istarwyh
 * @Date: 2021-03-15 16:45
 * @Version: ing
 */
public class TrieNode {
    /**
     * 1. convert the word to chars.
     * 2. start comparing each of them with trie node from root.
     * 3.  If the current character is present in the node, move forward to its children.
     * 4. Recursively doing this until all of the characters are found.
     */
    public Map<Character, TrieNode> children;
    /**
     * mark if the leaf is
     * It is not necessary that leaf has to be the node without children.
     */
    public boolean leaf;

    public TrieNode() {
        children = new HashMap<Character, TrieNode>();
        leaf = false;
    }


}
