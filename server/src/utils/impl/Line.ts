import { ILine } from "../ILine";
import { Range, Position } from 'vscode-languageserver';
import Transfer from './Transfer';

class Line implements ILine {
    private static transer = new Transfer();
    public constructor() { }

    public static distillLastWordByArray(text: string, wordRegex: RegExp): string {
        var matches = text.match(wordRegex);
        // let preWord = RegExp.$1.substring(-1);
        // // var preWord = RegExp[Symbol.match](text);
        // console.log("<"+preWord+">");    
        return matches === null ? "" : matches[matches.length - 1];
    }

    public static distillKeyFromRegex(lineText: string, wordRegex: RegExp, wordStr: string): string {
        let str = wordRegex.test(lineText) ? Line.cutLastWord(lineText, wordStr) : lineText;
        return Line.transer.builder(str).upper2proto().ing2proto().passive2proto().toString();
    }

    public static cutLastWord(lineText: string, flag: string): string {
        return lineText.trim().substring(lineText.lastIndexOf(flag) + flag.length, lineText.length);
    }

    public static validText(text: string): boolean {
        // /([a-zA-Z0-9-]+){1}\b/;    
        const textRegex = /([a-zA-Z0-9-]+)/;
        return textRegex.test(text);
    }

    public static position2String(position: Position): string {
        return `{Line: ${position.line}, Character: ${position.character}}`;
    }

    public static isIssues(word: string, issueRegex: RegExp): boolean {
        return issueRegex.test(word);
    }
    
}
export default Line;