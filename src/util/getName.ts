import {Range,Position } from 'vscode';
export function getName( text:string,componentRegex:RegExp){
    text.match(componentRegex);
    let preWord: string;
    preWord = RegExp.$1.substring(-1);
    
    return preWord;
};
export function rangeStartToString(position:Position):String{
    return `{Line :${position.line}, Character:${position.character}}`;
}
