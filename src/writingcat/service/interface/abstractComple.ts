import { TextDocument, Position, CompletionItem, MarkdownString, CompletionItemKind } from "vscode";
import CollocationDetail from "../../entity/CollocationDetail";
import { Interpretation } from "../../entity/Interpretation";
import Utils from "../../utils/Utils";
import { ComComple } from "./ComComple";

export default abstract class abstractComple implements ComComple{
    abstract provideCompletionItems(document: TextDocument, position: Position): CompletionItem[];    
    abstract getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[];
    abstract getComples4Arr(arr: string[]): CompletionItem[];
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