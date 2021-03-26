import { ILine } from "../ILine";
import { Range, Position } from 'vscode';

class Line implements ILine {
    public constructor() { }
    /**
     * Have verified by test(), so no verification required here( like verifing non-null) in fact.
     * @param text 
     * @param wordRegex 
     * @returns key
     */
    public static distillNameOfArray(text: string, wordRegex: RegExp): string {
        var matches = text.match(wordRegex);
        // let preWord = RegExp.$1.substring(-1);
        // // var preWord = RegExp[Symbol.match](text);
        // console.log("<"+preWord+">");    
        return matches === null ? "" : matches[matches.length - 1];
    }

    public static cutLastWord(lineText: string, wordStr: string): string {
        return lineText.trim().substring(lineText.lastIndexOf(wordStr) + wordStr.length, lineText.length);
    }

    public static distillKey(lineText: string, wordRegex: RegExp, wordStr: string): string {
        return wordRegex.test(lineText) ? Line.cutLastWord(lineText, wordStr) : lineText;
    }

    public static validText(text: string): boolean {
        // /([a-zA-Z0-9-]+){1}\b/;    
        const textRegex = /([a-zA-Z0-9-]+)/;
        return textRegex.test(text);
    }

    public static position2String(position: Position): string {
        return `{Line: ${position.line}, Character: ${position.character}}`;
    }
}
export default Line;