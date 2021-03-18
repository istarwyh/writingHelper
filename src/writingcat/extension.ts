'use strict';
import * as vscode from 'vscode';
import AutoLoader from './AutoLoader';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log("--------------start-----------------");
	AutoLoader.buildSingleTrie();
	// AutoLoader.wordTree.print(AutoLoader.wordTree.root);
	/**
	 * Issue/话题补全--主要是提示
	 */
	require('./service/impl/IssueCue')(context);
	/**
	 * 单词补全--引导补全词伙单词
	 */
	require('./service/impl/WordComple')(context);
	/**
	 * 词伙补全
	 */
	require('./service/impl/PhrasesComple')(context);
	/**
	 * 跳转到文件上部或下部
	 */
	require('./service/move')(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("---------------end------------------");
}
