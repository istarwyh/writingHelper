'use strict';
import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine } from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from '../params';
import Line from '../utils/Line';
import Phrases from '../repository/CollocationJson.json';
import CollocationDetail from '../entity/CollocationDetail';

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
    if (componentRegex.test(text)) {
        const wordKey: string = Line.distillName(text, componentRegex);
        if(wordKey === Phrases[0][CollocationDetail.wordKey.toString()]){

        }
        const params:string = components[wordKey];
        if (params) {
            const properties = Object.keys(params);
            // map()回调循环将phraseKey对应的phrase提取出来
            const completionItems = properties.map((phraseKey) => {
                const completionItem = new CompletionItem( phraseKey , CompletionItemKind.Text);
                // params[prop]就是label对应的api细节部分
                completionItem.documentation = new MarkdownString("&emsp;ExplanationExample&emsp;").appendCodeblock(params[phraseKey], 'typescript');
                // completionItem.insertText = new SnippetString( prop+" "+"${1|is,am,are,was,were|}" );
                // completionItem.insertText = new SnippetString( prop+" " );
                completionItem.preselect = true;
                completionItem.sortText = "L";
                // console.log( _getName.position2String(position) );
                // var inserting = new Range(position.line,10,position.line,20);
                // var replacing = new Range(position.line,10,position.line,20);
                // completionItem.range = {inserting,replacing};   
                // completionItem.range = range;
                return completionItem;
            });

            return completionItems;
        }
        return [];
    }
    return [];
}
const completionTriggerChars = [" ", "\n", "~"];
const documentSelector = ['html', 'plainText', 'plaintext', 'txt'];
const wordsComple = languages.registerCompletionItemProvider(documentSelector,
    { provideCompletionItems }, ...completionTriggerChars);

module.exports = function (context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        wordsComple
    );
};
