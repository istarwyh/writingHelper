'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import AutoLoader from '../../AutoLoader';
import CollocationDetail from "../../entity/CollocationDetail";
import Utils from '../../utils/Utils';
import abstractComple from "../abstractComple";
import Phrases from '../../repository/Collocations.json';
import Line from '../../utils/impl/Line';

export default class IssueCue extends abstractComple {
    public provideCompletionItems(lineText: string, ...regExps: string[]): CompletionItem[] {
        var matchedKeys = new Array<string>();
        const issueKey = Line.cutLastWord(lineText, regExps[0]);
        // filter返回的是满足条件的元素,map返回的是满足条件后的boolean值
        // forEach是对结点进行函数式处理
        Phrases.filter(
            (phrase) => {
                return issueKey === phrase[CollocationDetail.issueStr()][0]
            }
        ).forEach(matchedphrase => {
            matchedKeys.push(matchedphrase[CollocationDetail.collocationStr()]);
        });

        return this.getComples4Arr(Utils.notNull(matchedKeys));
    }
}