import { CompletionItem, Position, TextDocument } from "vscode";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";

export interface IComComple {
    /**
     * 主方法
     * @param document 
     * @param position 
     */
    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[];
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
     * collocation & interpretation getCompletionItem
     * @param collocation 
     * @param interpretation 
     */
    getCompletionItem(collocation: string, interpretation: Interpretation[]): CompletionItem;
}