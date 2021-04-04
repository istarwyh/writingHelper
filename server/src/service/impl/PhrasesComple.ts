'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Phrases from '../../repository/Collocations.json';
import CollocationDetail from '../../entity/CollocationDetail';
import abstractComple from '../abstractComple';
import AutoLoader from '../../AutoLoader';

export default class PhrasesComple extends abstractComple{
    /**
     * 
     * @param text 等用户补全/写完了直接拿到wordKey,在此之前引导向已有的wordKey补全
     * @param regExp 
     * @returns 
     */
    public provideCompletionItems(...wordKeys: string[]): CompletionItem[] {
        let phrases = new Array<CollocationDetail>();
        for (let p of Phrases) {
            // todo:改成词语相似度计算方法/有哪些符合条件的单词对应的phrase
            if (wordKeys[0] === p[CollocationDetail.wordKeyStr()][0]) {
                phrases.push(p);
            }
        }
        return this.getComples4CollocationDetail(phrases);
    }
}