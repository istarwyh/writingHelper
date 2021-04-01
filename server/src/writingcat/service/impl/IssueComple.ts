'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Phrases from '../../repository/Collocations.json';
import CollocationDetail from '../../entity/CollocationDetail';
import abstractComple from '../abstractComple';
import Utils from '../../utils/Utils';

export default class IssueComple extends abstractComple {
	public provideCompletionItems(...issueKeys: string[]): CompletionItem[] {
		let phrases = new Array<CollocationDetail>();
		// filter返回的是满足条件的元素,map返回的是满足条件后的boolean值
		// forEach是对结点进行函数式处理
		console.log(Utils.getCurTime(""));
		phrases = Phrases.filter(
			(phrase) => {
				return issueKeys[0] === phrase[CollocationDetail.issueStr()][0];
			}
		);
		console.log(Utils.getCurTime(""));
		return this.getComples4CollocationDetail(phrases);
	}
}