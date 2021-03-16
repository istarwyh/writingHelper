import { CompletionItem, Position, TextDocument } from "vscode";
import CollocationDetail from "../../entity/CollocationDetail";
import { Interpretation } from "../../entity/Interpretation";

export interface ComComple {
    provideCompletionItems(document: TextDocument, position: Position): CompletionItem[];
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[];
    getComples4Arr(arr: Array<string>): CompletionItem[];
    getCompletionItem(collocation: string, interpretation: Interpretation[]): CompletionItem;
}