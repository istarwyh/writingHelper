'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import Initial from '../controller/Initial';
import CollocationDetail from "../entity/CollocationDetail";
import Utils from '../utils/Utils';
import abstractComple from "./interface/abstractComple";
import Phrases from '../repository/Collocations.json';

module.exports = function (context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        languages.registerCompletionItemProvider(IssueCue.documentSelector, { provideCompletionItems }, ...IssueCue.completionTriggerChars)
    );
};

function provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const line: TextLine = document.lineAt(position);
    const lineText: string = line.text.substring(0, position.character);
    const textRegex = /([a-zA-Z]+)/g;
    var lastIndex = lineText.lastIndexOf("@");
    if (!textRegex.test(lineText) || lastIndex === -1) {
        return [];
    }
    // todo: 触发字符是@和.,怎么样让触发字符消失,这肯定是要改的
    var issueKey = lineText.substring(lastIndex + 1, lineText.length-1);
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
    
    return new IssueCue().getComples4Arr(Utils.notNull(matchedKeys));
}

export default class IssueCue extends abstractComple {
    static readonly completionTriggerChars = ["@","."];

    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        throw new Error("Method not implemented.");
    }
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        throw new Error("Method not implemented.");
    }

}