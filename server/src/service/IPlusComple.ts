import { CompletionItem } from 'vscode-languageserver';

export interface IPlusComple {
	/**
	 * modify exisiting CompletionItem
	 * @param _item 
	 */
	modifyCompletionItem(_item: CompletionItem): CompletionItem;
}