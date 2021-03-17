'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
import CollocationDetail from '../../entity/CollocationDetail';
import Utils from '../../utils/Utils';
import Initial from '../../controller/Initial';
import abstractComple from '../abstractComple';


/**
 * todo: What is {provideCompletionItems}?CompletionItemProvider<CompletionItem>.provideCompletionItems?
 */
module.exports = function (context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        languages.registerCompletionItemProvider(WordComple.documentSelector, { provideCompletionItems }, ...WordComple.completionTriggerChars)
    );
};
function provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const line: TextLine = document.lineAt(position);
    const lineText: string = line.text.substring(0, position.character);
    const textRegex = /([a-zA-Z]+)/g;
    var lastIndex = lineText.lastIndexOf(" ");
    if ( !textRegex.test(lineText) || lastIndex === lineText.length -1) {
        return [];
    }
    const wordRegex = / /;
    var chKey = wordRegex.test(lineText) ? lineText.substring(lastIndex + 1, lineText.length) : lineText;
 
    var prefix = chKey;
    var matchedKeys = Initial.wordTree.searchWordsByPrefix(prefix);
    // todo:换成staic method or 传入wordComple
    return new WordComple().getComples4Arr(Utils.notNull(matchedKeys));
}
/**
 * todo: don't konw how to add 'provideCompletionItems' in WordComple
 */
class WordComple extends abstractComple {
    static readonly completionTriggerChars = [" ", "\n"];

    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        return provideCompletionItems(document, position);
    }
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        throw new Error('Method not implemented.');
    }
   
}
