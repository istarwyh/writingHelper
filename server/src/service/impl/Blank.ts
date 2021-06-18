import { CompletionItem } from 'vscode-languageserver';
import CompleHandler from '../abstractComple';

export default class Blank extends CompleHandler{
	public provideCompletionItems(...chKeys: string[]): CompletionItem[]{
		return [];
	}
}