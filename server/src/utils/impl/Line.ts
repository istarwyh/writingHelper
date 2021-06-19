import { ILine } from "../ILine";
import { Range, Position } from 'vscode-languageserver';
import Transfer from './Transfer';
import { IssueFeature } from '../../controller/CComple';

class Line implements ILine {
    private static transer = new Transfer();
    public constructor() { }

    public static distillLastWordByArray(text: string, wordRegex: RegExp): string {
        var matches = text.match(wordRegex);
        // let preWord = RegExp.$1.substring(-1);
        // // var preWord = RegExp[Symbol.match](text);
        // console.log("<"+preWord+">");    
        return matches === null ? "" : Line.beDull(matches[matches.length - 1]);
    }

    private static beDull(word: string): string {
        return Line.transer.builder(word).upper2proto().ing2proto().passive2proto().toString();
    }

    public static cutLastWord(lineText: string, flag: string): string {
        return lineText. substring(lineText.lastIndexOf(flag) + flag.length, lineText.length);
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