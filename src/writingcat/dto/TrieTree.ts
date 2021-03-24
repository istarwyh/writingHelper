import Utils from "../utils/Utils";
import Node from "./Node";

export default class TrieTree {
    /**
     * should not be 'static', because TrieTree is just a common class not a function class
     */
    public readonly root: Node = new Node();
    public constructor() { }

    
    public insert(word: string): void {
        let cur: Node = this.root;
        for (let i = 0; i < word.length; i++) {
            let ch = word.charAt(i);
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new Node());
            }
            cur = Utils.notUndefined(cur.children.get(ch));
        }
        cur.leaf = true;
    }
    /**
     * 先确定最公共的Prefix,以减少查询时间
     * @param prefix 
     * @returns 所有完整的单词
     */
    public searchWordsByPrefix(prefix: string): Array<string> | null {
        let cur: Node = this.root;
        let prefi = "";
        for (let i = 0; i < prefix.length; i++) {
            let ch = prefix.charAt(i);
            if (!cur.children.has(ch)) {
                return null;
            } else {
                prefi = prefi + ch;
                cur = Utils.notUndefined(cur.children.get(ch));
            }
        }
        var list = new Array<string>();
        this.dfs(cur, prefi, list);
        return list;
    }

    private dfs(node: Node, prefix: string, list: string[]) {
        if (node.leaf) {
            list.push(prefix);
        }
        node.children.forEach(
            (children, char) => {
                // 传入到这个结点路径组成的单词
                this.dfs(children, prefix + char, list);
            }
        )
    }

    public print(cur : Node):void{
        if( cur == null ){
            return;
        }
        console.log(cur.toString());
        cur.children.forEach(
            (v,k)=>{
                this.print(v);
            }
        )
    }
}
