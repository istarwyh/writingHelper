import { CompletionItem } from 'vscode-languageserver';
import AutoLoader from '../../AutoLoader';
import CComple from '../../controller/CComple';
import Line from '../../utils/impl/Line';
import CompleHandler from '../abstractComple';

export default class Blank extends CompleHandler {

	public door(text: string): boolean {
		return !Line.validText(text);
	}

	public provideCompletionItems(text: string): CompletionItem[] {
		if (this.door(text)) {
			return [];
		}
		// global can enable the whole paragraph being matched
		const wordRegex = /([a-zA-Z]+)/g;
		const lastWord = Line.distillLastWordByArray(text, wordRegex);
		if (Line.isIssues(lastWord, CComple.issueFeature.issueRegex)) {
			const lastWordKey = Line.cutLastWord(lastWord, CComple.issueFeature.issueFlag);
			if (AutoLoader.getIssueTree().hasPrefix(lastWordKey)) {
				return this.getLeft().provideCompletionItems(lastWordKey);
			} else {
				return [];
			}
		} else {
			return this.getRight().provideCompletionItems(lastWord);
		}
	}
}