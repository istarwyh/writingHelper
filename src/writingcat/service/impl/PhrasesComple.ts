'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import Line from '../../utils/impl/Line';
import Phrases from '../../repository/Collocations.json';
import CollocationDetail from '../../entity/CollocationDetail';
import abstractComple from '../abstractComple';

export default class PhrasesComple extends abstractComple{
    /**
     * 
     * @param text 等用户补全/写完了直接拿到wordKey,在此之前引导向已有的wordKey补全
     * @param regExp 
     * @returns 
     */
    public provideCompletionItems(text: string,...regExp: string[]): CompletionItem[] {
        const wordKey: string = Line.distillNameOfArray(text, regExp[0]);
        console.log("THE wordKey:\n" + "<" + wordKey + ">");

        let phrases = new Array<CollocationDetail>();
        for (let p of Phrases) {
            // todo:改成词语相似度计算方法
            if (wordKey === p[CollocationDetail.wordKeyStr()][0]) {
                phrases.push(p);
            }
        }
        return this.getComples4CollocationDetail(phrases);
    }
}