import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine, CompletionItemProvider, CancellationToken, CompletionContext, CompletionList, ProviderResult, Disposable } from 'vscode';
import IssueCue from '../service/impl/IssueCue';
import WordComple from '../service/impl/WordComple';
class CComple {
    // todo: 触发字符是@和.,怎么样让触发字符消失,这肯定是要改的
    static readonly completionTriggerChars = ["@", "."];
    static readonly documentSelector = ['plainText', 'plaintext', 'txt'];

    public static buildComple(): Disposable {
        return languages.registerCompletionItemProvider(CComple.documentSelector, { provideCompletionItems }, ...CComple.completionTriggerChars);
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
    const lineText: string = line.text.substring(0, position.character);
    const textRegex = /([a-zA-Z0-9-]+)/g;
    const atRegex = /@/;
    var atIndex = lineText.lastIndexOf("@");
    var spaceIndex = lineText.lastIndexOf(" ");
    // todo:使用策略模式改写    
    if (!textRegex.test(lineText)) {
        return [];
    } else if (atRegex.test(lineText) && atIndex === -1) {
        return [];
    } else if (spaceIndex === lineText.length - 1) {
        // 代表不需要补全wordKey了
        return [];
    } else if (atRegex.test(lineText)) {
        return new IssueCue().getIssueCue(lineText, atIndex);
    } else {
        return new WordComple().getWordComple(lineText, spaceIndex);
    }
}

// https://www.jianshu.com/p/f1e54dde30c8
export default CComple;