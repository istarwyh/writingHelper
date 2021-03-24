export default class Node {
    // todo: private?
    public children: Map<string, Node>;
    public leaf: boolean;
    public constructor() {
        this.children = new Map<string, Node>();
        this.leaf = false;
    }
    public toString(): string {
        return "{leaf?: " + this.leaf + "   \nchKey:" + this.children.forEach(
            (v, k) => {
                console.log(k);
            }
        )+"}";
    }
}