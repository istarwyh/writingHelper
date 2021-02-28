import {Range,Position } from 'vscode';
export function getName( text:string,componentRegex:RegExp){
    var matches = text.match(componentRegex);
    // let preWord = RegExp.$1.substring(-1);
    // // var preWord = RegExp[Symbol.match](text);
    // // console.log(" ???"+matches[match.length-1]);    
    // console.log("<"+preWord+">");    
    if( matches !== null ){
        console.log("<"+matches[matches.length-1]+">");    
        console.log("<"+matches[0]+">");  
        console.log("<"+matches[2]+">");  
        console.log("<"+matches[1]+">"); 
        return matches[matches.length-1];
    }else{
        return 0;
    }
 
    
};
export function position2String(position:Position):String{
    return `{Line: ${position.line}, Character: ${position.character}}`;
}
