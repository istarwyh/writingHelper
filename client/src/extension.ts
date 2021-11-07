import * as vscode from 'vscode';
import{registerCommands} from './commands';
import {LanguageClient} from 'vscode-languageclient';
import WritingCatClient from './WritingCatClient';
import WordCounter from './utils/WordCounter';

let client: LanguageClient;
export function activate(context: vscode.ExtensionContext) {
	client = WritingCatClient.buildWritingCatClient(context, 6009, "writingcat");
	context.subscriptions.push(
	...registerCommands(client),
	client.start(),
	WordCounter.showWordCountStatusBar());
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
