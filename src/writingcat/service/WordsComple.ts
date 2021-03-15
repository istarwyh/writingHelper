'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from '../params';
import Line from '../utils/Line';
import Phrases from '../repository/Collocations.json';
import CollocationDetail from '../entity/CollocationDetail';
import { Interception } from '../entity/Interception';
import StringUtils from '../utils/StringUtils';


const completionTriggerChars = [" ", "\n", "@"];
const documentSelector = ['html', 'plainText', 'plaintext', 'txt'];
/**
 * todo: What is {provideCompletionItems}?CompletionItemProvider<CompletionItem>.provideCompletionItems?
 */
module.exports = function (context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        languages.registerCompletionItemProvider(documentSelector, { provideCompletionItems }, ...completionTriggerChars);
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

    var phrase = Phrases[0];
    if (wordKey === phrase[CollocationDetail.wordKeyStr()]) {
        console.log("------------------Completion------------------------");
        const interception: Interception[] = phrase[CollocationDetail.interceptionStr()];
        const collocation: string = phrase[CollocationDetail.collocationStr()];
        return getCompletionItems(collocation, StringUtils.notNull(interception));;
    }

    return [];
}

function getCompletionItems(collocation: string, interception: Interception[]): CompletionItem[] {
    let completionItems = new Array();
    completionItems.push(getCompletionItem(collocation, interception));
    return completionItems;
}

function getCompletionItem(collocation: string, interception: Interception[]): CompletionItem {
    const completionItem = new CompletionItem(collocation, CompletionItemKind.Text);
    var appendTitle = "&emsp;<font color=\"skyblue\">Interception</font>&emsp;";
    const englishIerception: string = interception[0][Interception.EnglishStr()];
    const sentence = interception[Interception.sentenceStr()];
    if (englishIerception || sentence) {
        appendTitle = sentence ? sentence : englishIerception;
    }
    completionItem.documentation = new MarkdownString(appendTitle).appendCodeblock(interception[0][Interception.ChineseStr()], 'typescript');
    completionItem.preselect = true;
    completionItem.sortText = "L";
    return completionItem;
}
