import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine, CompletionItemProvider, CancellationToken, CompletionContext, CompletionList, ProviderResult, Disposable } from 'vscode';
import IssueCue from '../service/impl/IssueCue';
import WordComple from '../service/impl/WordComple';
import PhrasesComple from '../service/impl/PhrasesComple';
import Line from '../utils/impl/Line';
import AutoLoader from '../AutoLoader';
class CComple {
    // todo: 触发字符是@和.,怎么样让触发字符消失,这肯定是要改的
    static readonly completionTriggerChars = ["ff", " ", "\t", "\n"];
    static readonly documentSelector = ['plainText', 'plaintext', 'txt'];
    static readonly issueCue = new IssueCue();
    static readonly wordComple = new WordComple();
    static readonly phrasesComple = new PhrasesComple();

    public static buildComple(): Disposable {
        return languages.registerCompletionItemProvider(CComple.documentSelector, { provideCompletionItems }, ...CComple.completionTriggerChars);
    }

    /**
     * Determine whether it is looking for an issue
     */
    public static isIssues(text: string, ffRegex: RegExp): boolean {
        // const ffIndex = text.lastIndexOf("ff");
        return ffRegex.test(text);
    }
}

/**
 * 初步理解{provideCompletionItems} 为实现了CompletionItemProvider接口的匿名函数
 * @param document 全部文本
 * @param position cursor位置
 * @returns todo: don't konw how to add 'provideCompletionItems' in WordComple
 */
function provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const line: TextLine = document.lineAt(position);
    /* 减少检索范围，仅检索光标所在行 */
    const lineText: string = line.text.substring(0, position.character);
    const ffRegex = /^ff/;
    console.log("text:\n" + lineText);
    if (!Line.validText(lineText)) {
        return [];
    }
    var wordRegex= " ";
    const chKey = Line.distillKey(lineText, wordRegex);
    if (AutoLoader.wordTree.has(chKey)) {
        wordRegex = "([a-zA-Z]+)";
        return CComple.phrasesComple.provideCompletionItems(lineText, wordRegex);
    } else {
        if(CComple.isIssues(lineText, ffRegex)){
            wordRegex = "ff";
            return CComple.issueCue.provideCompletionItems(lineText, wordRegex);
        }else{
            return CComple.wordComple.provideCompletionItems(lineText, chKey);
        }
    }
}

// https://www.jianshu.com/p/f1e54dde30c8
export default CComple;