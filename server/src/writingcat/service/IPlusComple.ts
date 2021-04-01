import { CompletionItem } from 'vscode-languageserver';

export interface IPlusComple {
	modifyCompletionItem(_item: CompletionItem): CompletionItem;
}