import CollocationDetail from "../entity/CollocationDetail";
import TrieTree from "../entity/TrieTree";
import Phrases from "../repository/Collocations.json";
/**
 * Initial controller class to prepare resouces and dispathch tasks 
 */
export default class Initial {
    public static trieTree: TrieTree;

    private constructor() {
        Initial.trieTree = new TrieTree()
        Phrases.forEach(
            (phrase) => {
                Initial.trieTree.insert(phrase[CollocationDetail.wordKeyStr()]);
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
    if (Initial.trieTree === undefined ||  Initial.trieTree === null) {
            new Initial();
            return Initial.trieTree; 
        }else{
            return this.trieTree;
        }
    }
}