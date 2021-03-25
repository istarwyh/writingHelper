import { CompletionItem, Position, TextDocument } from "vscode";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";

export interface IComComple {

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
    getCompletionItem(collocation: string, interpretation: Interpretation[]): CompletionItem;
}