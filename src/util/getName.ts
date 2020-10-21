import {Range,Position } from 'vscode';
export function getName( text:string,componentRegex:RegExp){
    text.match(componentRegex);
    let preWord = RegExp.$9;
    // var preWord = RegExp[Symbol.match](text);
   console.log(" ???"+preWord);    
    
    return preWord;
};
export function rangeStartToString(position:Position):String{
    return `{Line: ${position.line}, Character: ${position.character}}`;
}
