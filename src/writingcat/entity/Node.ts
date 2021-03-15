class Node {
    public children: Map<string, Node>;
    public leaf: boolean;
    public constructor() {
        this.children = new Map<string, Node>();
        this.leaf = false;
    }
}