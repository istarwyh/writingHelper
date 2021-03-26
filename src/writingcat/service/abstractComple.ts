import { TextDocument, Position, CompletionItem, MarkdownString, CompletionItemKind } from "vscode";
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";
import Utils from "../utils/Utils";
import { IComComple } from "./IComComple";

export default abstract class abstractComple implements IComComple {
    static completionTriggerChars: string[];
    static readonly documentSelector = ['plainText', 'plaintext', 'txt'];

    /**
     * 各自找到自己的matched elements实现provideCompletionItems
     * @param lineText
     * @param regExps 
     */
    protected provideCompletionItems(...regExps: string[]): CompletionItem[] {
        throw new Error("abstractComple can not provide CompletionItems");
    }
    
    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[]{
        let completionItems = new Array<CompletionItem>();
        for (let phrase of matchedphrases) {
            const interpretations: Interpretation[] = phrase[CollocationDetail.interpretationStr()];
            const collocation: string = phrase[CollocationDetail.collocationStr()];
            completionItems.push(this.getCompletionItem(collocation, Utils.notNull(interpretations)));
        }
        return completionItems;
    }
    
    getComples4Arr(ss: string[]): CompletionItem[] {
        var completionItems = new Array<CompletionItem>();
        ss.forEach(
            (s) => {
                const completionItem = new CompletionItem(s, CompletionItemKind.Reference);
                completionItem.preselect = true;
                completionItem.sortText = "L";
                completionItems.push(completionItem);
            }
        )
        return completionItems;
    }

    getCompletionItem(collocation: string, interpretations: Interpretation[]): CompletionItem {
        const completionItem = new CompletionItem(collocation, CompletionItemKind.Text);
        var appendTitle = "&emsp;<font color=\"skyblue\">Interpretation</font>&emsp;";
        var obj = interpretations[0];var enInterpretation;var sentence;
        if(obj.hasOwnProperty(Interpretation.EnglishStr())){
            enInterpretation = obj[Interpretation.EnglishStr()];
        }
        if(obj.hasOwnProperty(Interpretation.sentenceStr())){
            sentence = obj[Interpretation.sentenceStr()];
        }
        if (enInterpretation || sentence) {
            appendTitle = sentence ? sentence : enInterpretation;
        }
        completionItem.documentation = new MarkdownString(appendTitle).appendCodeblock(interpretations[0][Interpretation.ChineseStr()], 'typescript');
        completionItem.preselect = true;
        completionItem.sortText = "L";
        // completionItem.insertText = ;
        // completionItem.detail = ;
        return completionItem;
    }

}