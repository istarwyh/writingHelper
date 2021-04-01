import { CompletionItem, Position } from "vscode-languageserver";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";

export interface IComComple {
    /**
     * 各自找到自己的matched elements实现provideCompletionItems
     * @param lineText
     * @param regExps 
     */
    provideCompletionItems(...regExps: string[]): CompletionItem[];
    getComples4string(s: string): CompletionItem;
    /**
     * CollocationDetail[] provide CompletionItems
     * @param matchedphrases 
     */
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[];
    /**
     * Array<string> provide CompletionItems
     * @param arr 
     */
    getComples4Arr(arr: Array<string>): CompletionItem[];

    /**
     * collocation & interpretation polish CompletionItem
     * @param collocation 
     * @param interpretation 
     */
    getCompletionItem(wordKey: string, collocation: string, interpretation: Interpretation[]): CompletionItem;
}