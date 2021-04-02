'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Utils from '../../utils/Utils';
import AutoLoader from '../../AutoLoader';
import abstractComple from '../abstractComple';
import { IPlusComple } from '../IPlusComple';

class WordComple extends abstractComple implements IPlusComple {
    public provideCompletionItems(...chKeys: string[]): CompletionItem[] {
        var prefix = chKeys[0];
        var matchedWords = AutoLoader.wordTree.searchWordsByPrefix(prefix);
        return this.getComples4Arr(Utils.notNull(matchedWords));
    }

    modifyCompletionItem(_item: CompletionItem): CompletionItem {
        if(_item.label !== _item.data || _item.label.search(" ")) return _item;
        const collocation: string = Utils.notUndefined(AutoLoader.phraseMap.get(_item.data));
        return this.getComples4string(collocation);
    }

}
export default WordComple;