import { Lines } from "./interface/ILine";
import { Range, Position } from 'vscode';

class Line implements Lines {
    public constructor() { }
    public distillName(text: string, componentRegex: RegExp): string {
        var matches = text.match(componentRegex);
        // let preWord = RegExp.$1.substring(-1);
        // // var preWord = RegExp[Symbol.match](text);
        // // console.log(" ???"+matches[match.length-1]);    
        // console.log("<"+preWord+">");    
        if (matches !== null) {
            console.log("<" + matches[matches.length - 1] + ">");
            console.log("<" + matches[0] + ">");
            console.log("<" + matches[1] + ">");
            console.log("<" + matches[2] + ">");
            return matches[matches.length - 1];
        } else {
            return "";
        }
    }
    public position2String(position: Position): string {
        return `{Line: ${position.line}, Character: ${position.character}}`;
    }
}
export default Line;