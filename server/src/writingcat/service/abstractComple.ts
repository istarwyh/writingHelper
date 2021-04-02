import { Server } from 'http';
import { Position, CompletionItem, MarkupContent, CompletionItemKind, InsertTextFormat, MarkupKind } from "vscode-languageserver";
// import WritingCatServer from '../server';
import CollocationDetail from "../entity/CollocationDetail";
import { Interpretation } from "../entity/Interpretation";
import UserSettings from '../UserSettings';
import { Document } from '../utils/impl/Document';
import Utils from "../utils/Utils";
import { IComComple } from "./IComComple";

export default abstract class abstractComple implements IComComple {

    abstract provideCompletionItems(...regExps: string[]): CompletionItem[];

    getComples4CollocationDetail(matchedphrases: CollocationDetail[]): CompletionItem[] {
        let completionItems = new Array<CompletionItem>();
        for (let phrase of matchedphrases) {
            const wordKey = phrase[CollocationDetail.wordKeyStr()][0];
            const interpretations: Interpretation[] = phrase[CollocationDetail.interpretationStr()];
            const collocation: string = phrase[CollocationDetail.collocationStr()];
            completionItems.push(this.getCompletionItem(wordKey, collocation, Utils.notNull(interpretations)));
        }
        return completionItems;
    }
    getComples4string(s: string): CompletionItem {
        const _item = CompletionItem.create(s);
        _item.data = s;
        _item.kind = CompletionItemKind.Method;
        _item.preselect = true;
        _item.sortText = "R";
        _item.insertTextFormat = InsertTextFormat.Snippet;
        return _item;
    }
    getComples4Arr(ss: string[]): CompletionItem[] {
        var completionItems = new Array<CompletionItem>();
        ss.forEach(
            (s) => {
                completionItems.push(this.getComples4string(s));
            }
        )
        return completionItems;
    }

    getCompletionItem(wordKey: string, collocation: string, interpretations: Interpretation[]): CompletionItem {
        const _item = CompletionItem.create(collocation);
        _item.data = wordKey;
        _item.kind = CompletionItemKind.Function;
        var appendTitle = this.getAppendTitle(interpretations[0]);
        _item.documentation = Document.getMarkdownContent(appendTitle, interpretations[0][Interpretation.ChineseStr()]);
        _item.preselect = true;
        _item.sortText = "L";
        _item.insertTextFormat = InsertTextFormat.Snippet;
        // completionItem.detail = ;
        return _item;
    }

    private getAppendTitle(interpretation: Interpretation) {
        var appendTitle = "&emsp;<font color=\"skyblue\">Interpretation</font>&emsp;";
        // 对于Java打开网络:in = new BufferedReader(new InputStreamReader(new URL(urlStr).openStream(),"UTF-8") ); 
        if (UserSettings.getNetWorkState()) {
            appendTitle = "![rainbowcat](https://gitee.com/istarwyh/images/raw/master/1617025579_20210329214515706_12235.gif)";
        }
        //  else {
        //     setTimeout(() => WritingCatServer.userSeter.refreshNetWorkState(), 5000);
        // }
        var obj = interpretation; var enInterpretation; var sentence;
        if (obj.hasOwnProperty(Interpretation.EnglishStr())) {
            enInterpretation = obj[Interpretation.EnglishStr()];
        }
        if (obj.hasOwnProperty(Interpretation.sentenceStr())) {
            sentence = obj[Interpretation.sentenceStr()];
        }
        if (enInterpretation || sentence) {
            appendTitle = sentence ? sentence : enInterpretation;
        }
        return appendTitle;
    }
}