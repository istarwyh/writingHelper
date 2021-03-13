import {Range,Position } from 'vscode';
export interface Lines{
    /**
     * 
     * @param text 文本(行)
     * @param componentRegex 用以匹配以name作Key的正则条件
     */
    distillName(text:string,componentRegex:RegExp):string;

    /**
     * 
     * @param position cursor(光标)所在位置
     */
    position2String(position:Position):String
};