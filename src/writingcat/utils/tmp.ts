/**
 * JavaScript是基于原型实现的语言，其实根本没有类的概念
 */
var animal ={
    name:"animal",
    color:"black",
    eat:function(){
        console.log(this.name + " is eating");
    }
};
animal.eat();

var dog={
    name:"dog",
    // 特殊属性__proto__可以关联其他对象，实现继承组合与多态
    __ptoto__:animal
};
var cat ={
    name:"cat",
    __proto__:animal
};

/**
 * 在底下的TypeScript其实是语法糖，执行引擎会翻译为：
 *      Student.prototype = {sayHello:function(){...}}
 */
class Student{
    name:string;
    // constructor的this指向Student
    constructor(name:string){
        this.name = name;
    }
// JavaScript:sayHello()的this来自调用sayHello()的对象---实现了多态
//     this.sayHello = function(){
//         console.log("Hi,I'm" + this.name);
//     }
    sayHello = function(name:string){
        console.log("Hi,I'm" + name);
    }
    // 每个对象都有__proto__,Student其实是个对象而不是类
    // __proto__:Object
}
/**
 * in JavaScript you can access the code of any function it and use a regex to extract the variable name.
 * Like JVM Reflect
 */
var varExtractor = new RegExp("return (.*);");
export function getVariableName<TResult>(name: () => TResult) {
    var m = varExtractor.exec(name + "");
    if (m == null) throw new Error("The function does not contain a statement matching 'return variableName;'");
    return m[1];
}

var foo = "";
console.log(getVariableName(() => foo));


        // // params则是一个ts module
        // const params: string = components[wordKey];
        // if (params) {
        //     // 提取出module中的key组成的数组
        //     const properties = Object.keys(params);
        //     // 按照传进去的函数的处理方式处理
        //     // 回调循环将properties中的Key当作phraseKey提取出来传入函数并返回completionItem
        //     // 最后返回completionItem[]
        //     const completionItems: CompletionItem[] = properties.map((phraseKey) => {
        //         const completionItem = new CompletionItem(phraseKey, CompletionItemKind.Text);
        //         // params[prop]就是phraseKey对应的Interpretation部分
        //         completionItem.documentation = new MarkdownString("&emsp;ExplanationExample&emsp;").appendCodeblock(params[phraseKey], 'typescript');
        //         // completionItem.insertText = new SnippetString( prop+" "+"${1|is,am,are,was,were|}" );
        //         // completionItem.insertText = new SnippetString( prop+" " );
        //         completionItem.preselect = true;
        //         completionItem.sortText = "L";
        //         // console.log( _getName.position2String(position) );
        //         // var inserting = new Range(position.line,10,position.line,20);
        //         // var replacing = new Range(position.line,10,position.line,20);
        //         // completionItem.range = {inserting,replacing};   
        //         // completionItem.range = range;
        //         return completionItem;
        //     });

        //     return completionItems;
        // }
        // return [];