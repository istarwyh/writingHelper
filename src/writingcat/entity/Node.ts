class Node{
    val:string|null;
    child:[Node];
    end:boolean;
    height:number;
    num:number;
    constructor(value:string|null){
        this.val = value;//数值
        this.child = [new Node(null)];//孩子结点
        this.end = false;//是否是独立的单词
        this.height = 0;//深度
        this.num = 1;//经过单词数量
    }
    search(key:string){
        for(let i = 0;i< this.child.length; ++i){
            if(this.child[i].val == key){
                return this.child[i];
            }
        }
    }
}