import * as vscode from 'vscode';
import{registerCommands} from './commands';

import {
	LanguageClient} from 'vscode-languageclient';
import WritingCatClient from './WritingCatClient';
let client: LanguageClient;
export function activate(context: vscode.ExtensionContext) {
	client = WritingCatClient.buildWritingCatClient(context, 6009, "writingcat");
	/* 保证客户端能够在扩展关闭的同时关闭，并开启客户端*/
	context.subscriptions.push(...registerCommands(client),client.start());
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
