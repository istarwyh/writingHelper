import CollocationDetail from "../entity/CollocationDetail";
import TrieTree from "../entity/TrieTree";
import Phrases from "../repository/Collocations.json";
/**
 * Initial controller class to prepare resouces and dispathch tasks 
 */
export default class Initial {
    public static wordTree: TrieTree;
    public static issueTree: TrieTree;
    private constructor() {
        Initial.wordTree = new TrieTree();
        Initial.issueTree = new TrieTree();
        Phrases.forEach(
            (phrase) => {
                Initial.wordTree.insert(phrase[CollocationDetail.wordKeyStr()]);
                Initial.issueTree.insert(phrase[CollocationDetail.issueStr()][0]);
            }
        )

        
    }
    /**
     * single process of JS runtime, so don't need lock
     * null表示"没有对象"，即该处不应该有值，转为数值时为0;
     * undefined表示"缺少值"，就是此处应该有一个值，转为数值时为NaN。
     * @returns 
     */
    public static buildSingleTrie(): TrieTree{
        // 两个绑定在一起判断,因此省下两个判断
    if (Initial.wordTree === undefined ||  Initial.issueTree === null) {
            new Initial();
            return Initial.wordTree; 
        }else{
            return this.wordTree;
        }
    }
}