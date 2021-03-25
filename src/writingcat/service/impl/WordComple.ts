'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import CollocationDetail from '../../entity/CollocationDetail';
import Utils from '../../utils/Utils';
import AutoLoader from '../../AutoLoader';
import abstractComple from '../abstractComple';
import Line from '../../utils/impl/Line';


class WordComple extends abstractComple {
    public provideCompletionItems(lineText: string,chKey: string): CompletionItem[] {
        var prefix = chKey;
        var matchedKeys = AutoLoader.wordTree.searchWordsByPrefix(prefix);
        // todo:换成staic method or 传入wordComple
        return this.getComples4Arr(Utils.notNull(matchedKeys));
    }
}
export default WordComple;
