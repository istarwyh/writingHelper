'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Utils from '../../utils/Utils';
import AutoLoader from '../../AutoLoader';
import CompleHandler from '../abstractComple';
import { IPlusComple } from '../IPlusComple';

class WordComple extends CompleHandler implements IPlusComple {
    public provideCompletionItems(...chKeys: string[]): CompletionItem[] {
        var prefix = chKeys[0];
        var matchedWords = AutoLoader.getSingletonWordTree().searchWordsByPrefix(prefix);
        return this.getComples4Arr(Utils.notNull(matchedWords));
    }

    modifyCompletionItem(_item: CompletionItem): CompletionItem {
        if(_item.label !== _item.data || _item.label.search(" ")) return _item;
        const collocation: string = Utils.notUndefined(AutoLoader.getPhraseMap().get(_item.data));
        return this.constructComple4string(collocation);
    }

}
export default WordComple;