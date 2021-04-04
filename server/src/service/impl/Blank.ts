import { CompletionItem } from 'vscode-languageserver';
import abstractComple from '../abstractComple';

export default class Blank extends abstractComple{
	public provideCompletionItems(...chKeys: string[]): CompletionItem[]{
		return [];
	}
}