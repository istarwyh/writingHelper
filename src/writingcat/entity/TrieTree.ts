import Utils from "../utils/Utils";

class TrieTree {
    static root: Node = new Node();
    public constructor() { }
    public insert(word: string): void {
        let cur: Node = TrieTree.root;
        for (let i = 0; i < word.length; i++) {
            let ch = word.charAt(i);
            if (!cur.children.has(ch)) {
                cur.children.set(ch, new Node());
            }
            cur = Utils.notUndefined(cur.children.get(ch));
        }
        cur.leaf = true;
    }

    public searchWordsByPrefix(prefix: string): Array<string> | null {
        let cur: Node = TrieTree.root;
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
                this.dfs(children, char, list);
            }
        )
    }
}


