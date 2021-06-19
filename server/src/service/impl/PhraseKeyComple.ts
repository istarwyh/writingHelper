'use strict';
import { CompletionItem } from 'vscode-languageserver';
import Utils from '../../utils/Utils';
import AutoLoader from '../../AutoLoader';
import CompleHandler from '../abstractComple';
import { IPlusComple } from '../IPlusComple';

/**
 * 已经是CompleHandlerChain的叶子结点
 */
class PhrasekeyComple extends CompleHandler implements IPlusComple {

    public provideCompletionItems(...wordKeys: string[]): CompletionItem[] {
        let prefix = wordKeys[0];
        let matchedWords = AutoLoader.getSingletonWordTree().searchWordsByPrefix(prefix);
        return this.getComples4Arr(Utils.notNull(matchedWords,"matchedWords"));
    }

    modifyCompletionItem(_item: CompletionItem): CompletionItem {
        if(_item.label !== _item.data || _item.label.search(" ")) return _item;
        const collocation: string = Utils.notUndefined(AutoLoader.getPhraseMap().get(_item.data));
        return this.constructComple4string(collocation);
    }
}
export default PhrasekeyComple;