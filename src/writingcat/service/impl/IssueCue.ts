'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import AutoLoader from '../../AutoLoader';
import CollocationDetail from "../../entity/CollocationDetail";
import Utils from '../../utils/Utils';
import abstractComple from "../abstractComple";
import Phrases from '../../repository/Collocations.json';

// module.exports = function (context: { subscriptions: any[]; }) {
//     context.subscriptions.push(
//         languages.registerCompletionItemProvider(IssueCue.documentSelector, { provideCompletionItems }, ...IssueCue.completionTriggerChars)
//     );
// };

export default class IssueCue extends abstractComple {
    public constructor(){
        super();
    }

    public getIssueCue(lineText: string, ...triggerIndex:number[]): CompletionItem[] {
        var issueKey = lineText.substring(triggerIndex[0] + 1, lineText.length-1);
        var matchedKeys = new Array<string>();
        // filter返回的是满足条件的元素,map返回的是满足条件后的boolean值
        // forEach是对结点进行函数式处理
        Phrases.filter(
            (phrase)=>{
                return issueKey === phrase[CollocationDetail.issueStr()][0]
            }
        ).forEach( matchedphrase => {
            matchedKeys.push(matchedphrase[CollocationDetail.collocationStr()]);
        });
        
        return this.getComples4Arr(Utils.notNull(matchedKeys));
    }

    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        throw new Error("Method not implemented.");
    }
    
}