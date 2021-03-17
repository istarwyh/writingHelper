import { TextDocument, Position, CompletionItem, MarkdownString, CompletionItemKind } from "vscode";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";
import { IComComple } from "./IComComple";

export default abstract class abstractComple implements IComComple {
    static completionTriggerChars: string[];
    static readonly documentSelector = ['html', 'plainText', 'plaintext', 'txt'];

    abstract provideCompletionItems(document: TextDocument, position: Position): CompletionItem[];
    abstract getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[];
    
    getComples4Arr(ss: string[]): CompletionItem[] {
        var completionItems = new Array<CompletionItem>();
        ss.forEach(
            (s) => {
                const completionItem = new CompletionItem(s, CompletionItemKind.Keyword);
                completionItem.preselect = true;
                completionItem.sortText = "L";
                completionItems.push(completionItem);
            }
        )
        return completionItems;
    }

    getCompletionItem(collocation: string, interpretation: Interpretation[]): CompletionItem {
        const completionItem = new CompletionItem(collocation, CompletionItemKind.Text);
        var appendTitle = "&emsp;<font color=\"skyblue\">Interpretation</font>&emsp;";
        const englishIerception: string = interpretation[0][Interpretation.EnglishStr()];
        const sentence = interpretation[Interpretation.sentenceStr()];
        if (englishIerception || sentence) {
            appendTitle = sentence ? sentence : englishIerception;
        }
        completionItem.documentation = new MarkdownString(appendTitle).appendCodeblock(interpretation[0][Interpretation.ChineseStr()], 'typescript');
        completionItem.preselect = true;
        completionItem.sortText = "L";
        return completionItem;
    }

}