'use strict';
// vscode 是内置模块
import {window,ExtensionContext,languages, Disposable} from 'vscode';
import AutoLoader from './AutoLoader';
import CComple from './controller/CComple'
import CHome from './controller/CHome';
import Move from './service/move';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html ECMAScript vs CommonJS module
// require 是运行时调用,理论上可以运作在代码的任何地方,且是值拷贝
// import 是编译时调用，所以必须放在文件的开头,引用拷贝
export function activate(context: ExtensionContext) {
	console.log("--------------start-----------------");
	AutoLoader.buildSingleTrie();
	// AutoLoader.wordTree.print(AutoLoader.wordTree.root);

	const subscriptions_ = context.subscriptions;
	/**
	 * Issue/话题补全--主要是提示
	 */
	 subscriptions_.push(CComple.buildComple());

	/**
	 * 词伙补全
	 */
	require('./service/impl/PhrasesComple')(context);
	/**
	 * 跳转到文件末尾
	 */
	 subscriptions_.push(Move.buildMove());
	/**
	 * 提示用户writingCat已激活
	 */
	CHome.sayHello();
}

// this method is called when your extension is deactivated
export function deactivate() {
	CHome.sayBye();
	console.log("---------------end------------------");
}
