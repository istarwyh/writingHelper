'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import CollocationDetail from '../../entity/CollocationDetail';
import Utils from '../../utils/Utils';
import AutoLoader from '../../AutoLoader';
import abstractComple from '../abstractComple';
import Line from '../../utils/impl/Line';


class WordComple extends abstractComple {
    static readonly completionTriggerChars = [" ", "\n"];

    public getWordComple(lineText: string, spaceIndex: number): CompletionItem[] {
        const wordRegex = / /;
        let chKey = Line.distillKey(lineText, wordRegex, spaceIndex);
        var prefix = chKey;
        var matchedKeys = AutoLoader.wordTree.searchWordsByPrefix(prefix);
        // todo:换成staic method or 传入wordComple
        return this.getComples4Arr(Utils.notNull(matchedKeys));
    }

    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        throw new Error('Method not implemented.');
    }

}
export default WordComple;
