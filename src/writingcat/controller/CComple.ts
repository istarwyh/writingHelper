import { TextDocument, languages, CompletionItem, Position, CompletionItemKind, Range, MarkdownString, SnippetString, TextLine, CompletionItemProvider, CancellationToken, CompletionContext, CompletionList, ProviderResult } from 'vscode';
import IssueCue from '../service/impl/IssueCue';

class CComple {
    // todo: 触发字符是@和.,怎么样让触发字符消失,这肯定是要改的
    static readonly completionTriggerChars = ["@", "."];
    static readonly documentSelector = ['html', 'plainText', 'plaintext', 'txt'];
    public constructor(){}

    public registor(subscriptions: { dispose(): any }[]): void {
        subscriptions.push(languages.registerCompletionItemProvider(CComple.documentSelector,{provideCompletionItems}, ...CComple.completionTriggerChars))
    }
}
/**
 * 初步理解{provideCompletionItems} 为实现了CompletionItemProvider接口的函数
 * @param document 全部文本
 * @param position cursor位置
 * @returns 
 */
function provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const line: TextLine = document.lineAt(position);
    const lineText: string = line.text.substring(0, position.character);
    const textRegex = /([a-zA-Z]+)/g;
    var AtIndex = lineText.lastIndexOf("@");
    if (!textRegex.test(lineText) || AtIndex === -1) {
        return [];
    }
    return new IssueCue().getIssueCue(lineText, AtIndex);
}

// https://www.jianshu.com/p/f1e54dde30c8
export default CComple;