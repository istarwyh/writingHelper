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
    public static isIssues(word: string, ffRegex: RegExp): boolean {
        // const ffIndex = text.lastIndexOf("ff");
        return ffRegex.test(word);
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
    const lineText: string = line.text;
    if (!Line.validText(lineText)) {
        return [];
    }
    const wordRegex = "([a-zA-Z]+)";
    const lastWord: string = Line.distillNameOfArray(lineText, wordRegex);
    // console.log("THE wordKey:\n" + "<" + lastWord + ">");
    const issueRegex= "ff";
    var chKey = Line.distillKey(lastWord, issueRegex);
    const ffRegex = /^ff/;
    if(CComple.isIssues(lastWord, ffRegex)){
        return CComple.issueCue.provideCompletionItems(chKey);
    }else{
        if(AutoLoader.wordTree.has(chKey)){
            return CComple.phrasesComple.provideCompletionItems(chKey);
        }else{
            return CComple.wordComple.provideCompletionItems(chKey);
        }
    }
}

// https://www.jianshu.com/p/f1e54dde30c8
export default CComple;