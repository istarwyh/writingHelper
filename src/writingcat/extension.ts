'use strict';
// vscode 是内置模块
import {window,ExtensionContext} from 'vscode';
import AutoLoader from './AutoLoader';
import CComple from './controller/CComple'


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html ECMAScript vs CommonJS module
// require 是运行时调用,理论上可以运作在代码的任何地方,且是值拷贝
// import 是编译时调用，所以必须放在文件的开头,引用拷贝
export function activate(context: ExtensionContext) {
	console.log("--------------start-----------------");
	AutoLoader.buildSingleTrie();
	// AutoLoader.wordTree.print(AutoLoader.wordTree.root);
	/**
	 * Issue/话题补全--主要是提示
	 */
	let comple = new CComple();
	comple.registor(context.subscriptions);
	/**
	 * 词伙补全
	 */
	require('./service/impl/PhrasesComple')(context);
	/**
	 * 跳转到文件上部或下部
	 */
	require('./service/move')(context);
	window.showInformationMessage("Your writingHelper--writingCat has launched successfully! :-)");
}

// this method is called when your extension is deactivated
export function deactivate() {
	window.showInformationMessage("Good Bye! :-)");
	console.log("---------------end------------------");
}
