'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import Line from '../utils/Line';
// Phrases === CollocationDetails : CollocationDetail[]
import Phrases from '../repository/Collocations.json';
import CollocationDetail from '../entity/CollocationDetail';
import { Interpretation } from '../entity/Interpretation';
import Utils from '../utils/Utils';
import abstractComple from './interface/abstractComple';


/**
 * todo: What is {provideCompletionItems}?CompletionItemProvider<CompletionItem>.provideCompletionItems?
 */
module.exports = function (context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        languages.registerCompletionItemProvider(PhrasesComple.documentSelector, { provideCompletionItems }, ...PhrasesComple.completionTriggerChars)
    );
};


function provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const start: Position = new Position(0, 0);
    const range: Range = new Range(start, position);
    // const text = document.getText(range);   
    /* 减少检索范围，仅检索光标所在行 */
    const line: TextLine = document.lineAt(position);
    const text: string = line.text.substring(0, position.character);
    console.log("text:\n" + text);
    // const componentRegex = /([a-zA-Z0-9-]+){1}\b/;    
    const componentRegex = /([a-zA-Z0-9-]+)/g;
    if (componentRegex.test(text) === null) {
        return [];
    }
    const wordKey: string = Line.distillName(text, componentRegex);
    return getCompletionItems(PhrasesComple.findMatchedPhrases(Phrases, wordKey));
}
/**
 * todo: how to add 'provideCompletionItems' in PhrasesComple?
 */
class PhrasesComple extends abstractComple{
    static completionTriggerChars = ["\t", "\n"];

    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        throw new Error('Method not implemented.');
    }
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        throw new Error('Method not implemented.');
    }
    getComples4Arr(arr: string[]): CompletionItem[] {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param Phrases 等用户补全/写完了直接拿到wordKey,在此之前引导向已有的wordKey补全
     * @param wordKey 
     * @returns 
     */
    static findMatchedPhrases(Phrases: CollocationDetail[], wordKey: string): CollocationDetail[] {
        let phrases = new Array<CollocationDetail>();
        for (let p of Phrases) {
            if (wordKey === p[CollocationDetail.wordKeyStr()]) {
                phrases.push(p);
            }
        }
        return phrases;
    }

}

function getCompletionItems(matchedphrases : CollocationDetail[]): CompletionItem[] {
    let completionItems = new Array<CompletionItem>();
    for (let phrase of matchedphrases) {
        const interpretation: Interpretation[] = phrase[CollocationDetail.interpretationStr()];
        const collocation: string = phrase[CollocationDetail.collocationStr()];
        completionItems.push(getCompletionItem(collocation, Utils.notNull(interpretation)));
    }
    return completionItems;
}

function getCompletionItem(collocation: string, interpretation: Interpretation[]): CompletionItem {
    const completionItem = new CompletionItem(collocation, CompletionItemKind.Text);
    var appendTitle = "&emsp;<font color=\"skyblue\">Interpretation</font>&emsp;";
    const enInterpretation: string = interpretation[0][Interpretation.EnglishStr()];
    const sentence = interpretation[Interpretation.sentenceStr()];
    if (enInterpretation || sentence) {
        appendTitle = sentence ? sentence : enInterpretation;
    }
    completionItem.documentation = new MarkdownString(appendTitle).appendCodeblock(interpretation[0][Interpretation.ChineseStr()], 'typescript');
    completionItem.preselect = true;
    completionItem.sortText = "L";
    return completionItem;
}
