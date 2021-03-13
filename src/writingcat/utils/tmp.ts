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