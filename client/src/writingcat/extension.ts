'use strict';
// vscode 是内置模块
import {ExtensionContext} from 'vscode';
import Move from './Move';
import { LanguageClient } from 'vscode-languageclient/node';
import WritingCatClient from './WritingCatClient';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// http://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html ECMAScript vs CommonJS module
// require 是运行时调用,理论上可以运作在代码的任何地方,且是值拷贝
// import 是编译时调用，所以必须放在文件的开头,引用拷贝
var client: LanguageClient;
export function activate(context: ExtensionContext) {
	console.log("--------------LanguageClient Start-----------------");
	// Start the client. This will also launch the server
	WritingCatClient.buildWritingCatClient(context, 6009, "writingcat").start();
	const subscriptions_ = context.subscriptions;
	/**
	 * 跳转到文件末尾
	 */
	subscriptions_.push(Move.buildMove());
}

// this method is called when your extension is deactivated
export function deactivate(): Thenable<void> | undefined  {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
