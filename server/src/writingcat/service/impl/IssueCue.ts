'use strict';
import { CompletionItem } from 'vscode-languageserver';
import CollocationDetail from "../../entity/CollocationDetail";
import Utils from '../../utils/Utils';
import abstractComple from "../abstractComple";
import Phrases from '../../repository/Collocations.json';
import AutoLoader from '../../AutoLoader';

export default class IssueCue extends abstractComple {
    public provideCompletionItems(...issueKeys: string[]): CompletionItem[] {
        const matchedKeys: string[] = Utils.notNull(AutoLoader.issueTree.searchWordsByPrefix(issueKeys[0]));   
        return this.getComples4Arr(matchedKeys);
    }
}