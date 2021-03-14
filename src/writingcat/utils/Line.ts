import { ILine } from "./interface/ILine";
import { Range, Position } from 'vscode';

class Line implements ILine {
    public constructor() { }
    /**
     * Have verified by test(), so no verification required here( like verifing non-null) in fact.
     * @param text 
     * @param componentRegex 
     * @returns key
     */
    public static distillName(text: string, componentRegex: RegExp): string {
        var matches = text.match(componentRegex);
        // let preWord = RegExp.$1.substring(-1);
        // // var preWord = RegExp[Symbol.match](text);
        // console.log("<"+preWord+">");    
        if (matches !== null) {
            console.log("THE KEY:\n"+"<" + matches[matches.length - 1] + ">");
            // console.log("<" + matches[0] + ">");
            // console.log("<" + matches[1] + ">");
            // console.log("<" + matches[2] + ">");
            return matches[matches.length - 1];
        } else {
            return "";
        }
    }
    public static position2String(position: Position): string {
        return `{Line: ${position.line}, Character: ${position.character}}`;
    }
}
export default Line;