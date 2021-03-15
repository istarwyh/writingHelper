import java.util.ArrayList;
import java.util.List;

/**
 * @Description: TrieTree
 * @Author: https://jojozhuang.github.io/algorithm/data-structure-trie
 * @Date: 2021-03-15 17:32
 * @Version: ing
 */
public class TrieTree {

    static final TrieNode root = new TrieNode();

    /**
     * @param prefix
     * @return Return true if there is any word in trie that starts with the given prefix
     */
    public boolean startsWith(String prefix) {
        return searchNode(prefix) != null;
    }

    /**
     * @param word
     * @return Similar with prefix search, add additional check whether the node is leaf.
     */
    public boolean search(String word) {
        TrieNode tn = searchNode(word);
        return tn != null && tn.leaf;
    }

    private TrieNode searchNode(String str) {
        TrieNode current = root;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (current.children.containsKey(ch)) {
                current = current.children.get(ch);
            } else {
                return null;
            }
        }
        return current;
    }

    public List<String> searchWords(String prefix) {
        TrieNode current = root;
        var sb = new StringBuilder();
//        先移动到prefix所在的结点
        for (int i = 0; i < prefix.length();i++ ){
            var ch = prefix.charAt(i);
            if(!current.children.containsKey(ch)){
                return null;
            }else{
                sb.append(ch);
                current = current.children.get(ch);
            }
        }
        var list = new ArrayList<String>();
        dfs(current,sb.toString(),list);
        return list;
    }

    private void dfs(TrieNode node,String prefix,List<String> list){
        if(node.leaf){
            list.add(prefix);
        }
        for(var entry : node.children.entrySet()){
            dfs(entry.getValue(),prefix + entry.getKey(),list);
        }
    }

    public void insert(String word){
        TrieNode current = root;
        for( int i =0;i<word.length();i++){
            char ch = word.charAt(i);
            if(!current.children.containsKey(ch)){
                current.children.put(ch,new TrieNode());
            }
            current = current.children.get(ch);
        }
        current.leaf = true;
    }

    public boolean delete(String word) {
        TrieNode current = root;
        TrieNode lastBranchNode = null;
        Character lastBrachChar = null;

        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            if (current.children.containsKey(ch)) {
                if (current.children.size() > 1) {
                    lastBranchNode = current;
                    lastBrachChar = ch;
                }
                current = current.children.get(ch);
            } else {
                // word not found
                return false;
            }
        }

        if (current.children.size() > 0) {
            // case 1: The to-be deleted word is prefix of another long word in trie.
            current.leaf = false;
            return true;
        }

        if (lastBranchNode != null) {
            // case 2: The to-be deleted word has other words as prefix
            lastBranchNode.children.remove(lastBrachChar);
            return true;
        } else {
            // case 3: The to-be deleted word present as unique word
            root.children.remove(word.charAt(0));
            return true;
        }
    }


}
