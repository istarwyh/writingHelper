'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Phrases from '../../repository/Collocations.json';
import CollocationDetail from '../../entity/CollocationDetail';
import AutoLoader from '../../AutoLoader';
import CompleHandler from '../abstractComple';

export default class IssueComple extends CompleHandler {

	public door(lastWordKey: string): boolean {
		return AutoLoader.getIssueTree().has(lastWordKey);
	}

	public provideCompletionItems(issueKey: string): CompletionItem[] {
		if (this.door(issueKey)) {
			let phrases = new Array<CollocationDetail>();
			// filter返回的是满足条件的元素,map返回的是满足条件后的boolean值
			phrases = Phrases.filter(
				(phrase) => {
					return issueKey === phrase[CollocationDetail.issueStr()][0];
				}
			);
			return this.getComples4CollocationDetail(phrases);
		} else {
			return this.getLeft().provideCompletionItems(issueKey);
		}
	}
}