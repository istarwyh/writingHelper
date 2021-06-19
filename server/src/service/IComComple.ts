import { CompletionItem, Position } from "vscode-languageserver";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";

export interface IComComple {

    // provideCompletionItems(...regExps: string[]): CompletionItem[];
    
    /**
     * 各自找到自己的matched elements实现provideCompletionItems
     * 等用户补全/写完了直接拿到wordKey,在此之前引导向已有的wordKey补全
     * @param lineText
     * @param regExps 
     */
    provideCompletionItems(regExp: string): CompletionItem[];
    /**
     * string construct CompletionItems
     * @param s 
     */
    constructComple4string(s: string): CompletionItem;

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
     * @param wordKey 
     * @param collocation 
     * @param interpretation 
     */
    constrcutCompletionItem(wordKey: string, collocation: string, interpretation: Interpretation[]): CompletionItem;
}