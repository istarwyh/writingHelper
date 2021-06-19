import { Range, Position } from 'vscode-languageserver';
import { IssueFeature } from '../controller/CComple';
/**
 * Generic constraints are only available in compilation time, but then the compiler removes them as javascript doesn't support it
 */
export interface ILineBuilder<T extends ILine> {
    new(): T;

    /**
     * Have verified by test(), so no verification required here( like verifing non-null) in fact.
     */
    distillNameByArray(text: string, wordRegex: RegExp): string;

    /**
     * 将ing等形式的单词变为原型
     */
     diDull(word: string): string;

    /**
     * 切割出char到最后的部分,不包括char本身
     * @param text 文本(行)
     * @param flag 用以匹配以word作Key的标识
     */
    cutLastWord(text: string, flag: string): string;

    /**
     * 
     * @param position cursor(光标)所在位置
     */
    position2String(position: Position): String

    /**
     * 
     * @param text 验证是否是正常文本
     * @returns 
     */
    validText(text: string): boolean;

    /**
     * Determine whether it is looking for an issue
     */
    isIssues(word: string, issueRegex: RegExp): boolean;
}
/**
 *  Interfaces can't have static declarations
 * https://stackoverflow.com/questions/40171533typescript-call-static-method-of-generic-type
 * 
 */
export interface ILine { };