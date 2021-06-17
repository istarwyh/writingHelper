import IssueCue from '../service/impl/IssueCue';
import WordComple from '../service/impl/WordComple';
import PhrasesComple from '../service/impl/PhrasesComple';
import Blank from '../service/impl/Blank';
import Line from '../utils/impl/Line';
import AutoLoader from '../AutoLoader';
import abstractComple from '../service/abstractComple';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionItem, Position, Range } from 'vscode-languageserver';
import IssueComple from '../service/impl/IssueComple';
class CComple {
    // todo: 触发字符是@和.,怎么样让触发字符消失,这肯定是要改的
    static readonly completionTriggerChars: string[] = [' ', '\t', 'a',
        'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];
    // https://code.visualstudio.com/docs/languages/identifiers
    static readonly documentSelector = ['plaintext', 'markdown', 'latex'];
    
    static readonly issueCue = new IssueCue();
    static readonly wordComple = new WordComple();
    static readonly phrasesComple = new PhrasesComple();
    static readonly issueComple = new IssueComple();
    static readonly blank = new Blank();

    public static modifyCompletionItem(_item: CompletionItem): CompletionItem {
        return CComple.wordComple.modifyCompletionItem(_item);
    }

    /**
     * 初步理解{provideCompletionItems} 为实现了CompletionItemProvider接口的匿名函数
     * @param document 全部文本
     * @param position cursor位置
     * @returns todo: don't konw how to add 'provideCompletionItems' in WordComple
     */
    public static provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        const text: string = CComple.getTargetText(position, document);
        if (!Line.validText(text)) {
            return [];
        }
        // global can enable the whole paragraph being matched
        const wordRegex = /([a-zA-Z]+)/g;
        const lastWord: string = Line.distillLastWordByArray(text, wordRegex);
        const issueRegex = /^ff/;
        const issueStr = "ff";
        const chKey = Line.distillKeyFromRegex(lastWord, issueRegex, issueStr);
    
        // ```mermaid
        // graph LR
        // id1(lineText)--基础校验-->id2[validText]--业务校验-->id7{是否是issue查找&&<br>是否位于issue补全范围}
        // id4--否-->id8[话题Key提示]
        // id7--是-->id4{话题Key是否<br>已经补全}--是-->id66[领域词伙补全]
        // id7--否-->id3{词伙Key是否<br>已经补全}--是-->id6[词伙补全]
    
        // id3--否-->id9{是否位于<br>词伙补全范围}
        // id9--否-->id10[返回默认补全]
        // id9--是-->id5[词伙Key补全]--补全Key后-->id6
        // ```
        let compleObject: abstractComple =
            (Line.isIssues(lastWord, issueRegex) && AutoLoader.getIssueTree().hasPrefix(chKey)) ?
                (AutoLoader.getIssueTree().has(chKey) ? CComple.issueComple : CComple.issueCue) :
                (AutoLoader.getSingletonWordTree().has(chKey) ? CComple.phrasesComple :
                    (AutoLoader.getSingletonWordTree().hasPrefix(chKey) ? CComple.wordComple :
                        CComple.blank));
        return compleObject.provideCompletionItems(chKey);
    }
    
    /**
     * 减少检索范围，仅检索光标所在行 
     */
    private static getTargetText(position: Position, document: TextDocument) {
        let curRange = {
            start: { line: position.line, character: 0 },
            end: { line: position.line, character: position.character }
        };
        return document.getText(curRange);
    }
}

// https://www.jianshu.com/p/f1e54dde30c8
export default CComple;