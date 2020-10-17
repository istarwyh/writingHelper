'use strict';
import {TextDocument,languages, CompletionItem, Position, CompletionItemKind, Range,MarkdownString, SnippetString, TextLine} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from './params';
import * as _getName from './util/getName';

 
function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const start: Position = new Position(0, 0);
    const range: Range = new Range(start, position);
    // const text = document.getText(range);   
    /* 减少检索范围，仅检索光标所在行 */ 
    const line: TextLine = document.lineAt(position);
    const text: string = line.text.substring(0,position.character);

    const componentRegex = /([a-zA-Z0-9-]*)~/;    
    console.log(text); 
    console.log(componentRegex.test(text)); 
    if (componentRegex.test(text)) {
        const index = _getName.getName(text,componentRegex);
        const params = components[index];
        if (params) {
            const properties = Object.keys(params);
            // 回调函数循环将prop对应的details提取出来
            const completionItems = properties.map((prop) => {
                // CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
                // https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
                const completionItem = new CompletionItem(prop, CompletionItemKind.Variable);
                const mark = new MarkdownString("&emsp;Explanation&emsp;"); 
                // params[prop]就是label对应的api细节部分
                completionItem.documentation = mark.appendCodeblock(params[prop],'typescript');
                completionItem.insertText =new SnippetString(prop+"${1:}"+" ");
                completionItem.preselect = true;
                completionItem.range = new Range(new Position(0,position.character-1),position);   
                return completionItem;
            });

            return completionItems;  
        }
        return [];
    }
    return [];
}
const completionTriggerChars =  [" ", "\n","@"];  
const documentSelector = ['html','plainText','plaintext','txt'];
const wordsComple = languages.registerCompletionItemProvider(documentSelector, 
{provideCompletionItems}, ...completionTriggerChars);

module.exports = function(context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        wordsComple
    );
};
