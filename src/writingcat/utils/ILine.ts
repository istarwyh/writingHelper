import { Range, Position } from 'vscode';
/**
 * Generic constraints are only available in compilation time, but then the compiler removes them as javascript doesn't support it
 */
export interface ILineBuilder<T extends ILine> {
    new(): T;
    /**
     * 
     * @param text 文本(行)
     * @param componentRegex 用以匹配以name作Key的正则条件
     */
    distillName(text: string, regExp: string): string;

    /**
     * 切割出char到最后的部分,不包括char本身
     * @param text 
     * @param char 
     */
    cutLastWord(text: string, char: string) :string;
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
    validText(text:string):boolean;
}
/**
 *  Interfaces can't have static declarations
 * https://stackoverflow.com/questions/40171533typescript-call-static-method-of-generic-type
 * 
 */
export interface ILine {};