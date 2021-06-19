'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Phrases from '../../repository/Collocations.json';
import CollocationDetail from '../../entity/CollocationDetail';
import CompleHandler from '../abstractComple';
import AutoLoader from '../../AutoLoader';

export default class PhrasesComple extends CompleHandler {

    public door(lastWordKey: string): boolean {
        return AutoLoader.getSingletonWordTree().has(lastWordKey);
    }

    public provideCompletionItems(wordKey: string): CompletionItem[] {
        if (this.door(wordKey)) {
            let phrases = new Array<CollocationDetail>();
            for (let p of Phrases) {
                // todo:改成词语相似度计算方法/有哪些符合条件的单词对应的phrase
                if (wordKey === p[CollocationDetail.wordKeyStr()][0]) {
                    phrases.push(p);
                }
            }
            return this.getComples4CollocationDetail(phrases);
        } else {
            return this.getLeft().provideCompletionItems(wordKey);
        }
    }
}