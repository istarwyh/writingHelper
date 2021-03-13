import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log("--------------start-----------------");
	require('./WordsComple')(context);
	// 跳转到文件上部或下部
	require('./move')(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("---------------end------------------");
}
