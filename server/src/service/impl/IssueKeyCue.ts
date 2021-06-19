'use strict';
import { CompletionItem } from 'vscode-languageserver';
import AutoLoader from '../../AutoLoader';
import Utils from '../../utils/Utils';
import CompleHandler from '../abstractComple';
/**
 * 已经是CompleHandlerChain的叶子结点
 */
export default class IssueKeyCue extends CompleHandler {
    public provideCompletionItems(...issueKeys: string[]): CompletionItem[] {
        const matchedKeys: string[] = Utils.notNull(AutoLoader.getIssueTree().searchWordsByPrefix(issueKeys[0]),"matchedKeys");   
        return this.getComples4Arr(matchedKeys);
    }
}