import CollocationDetail from "./entity/CollocationDetail";
import TrieTree from "./dto/TrieTree";
import Phrases from "./repository/Collocations.json";
import Utils from './utils/Utils';
import { Logger } from 'log4js';

/**
 * AutoLoader controller class to prepare resouces and dispathch tasks 
 */
export default class AutoLoader {
    public static logger: Logger;
    private static wordTree: TrieTree;
    private static issueTree: TrieTree;
    private static phraseMap: Map<string, string>;
    private constructor() {
        AutoLoader.wordTree = new TrieTree();
        AutoLoader.issueTree = new TrieTree();
        // 这里必须是"writingcat",应该是Client中指定的LogPanelName
        AutoLoader.logger = Utils.createLogger("writingcat");
        AutoLoader.phraseMap = new Map<string, string>();

        var w = CollocationDetail.wordKeyStr();
        var i = CollocationDetail.issueStr();
        Phrases.forEach(
            (phrase) => {
                AutoLoader.wordTree.insert(phrase[w][0]);
                AutoLoader.issueTree.insert(phrase[i][0]).insert(Utils.null2Str(phrase[i][1]));
                // todo:先就做全部被覆盖的情况
                AutoLoader.phraseMap.set(phrase[w][0], phrase[CollocationDetail.collocationStr()]);
            }
        )
    }

    public static autoLoader(): void {
        // 两个绑定在一起判断,因此省下两个判断
        if (AutoLoader.wordTree === undefined || AutoLoader.issueTree === null) {
            new AutoLoader();
        }
    }

    /**
     * single process of JS runtime, so don't need lock
     * null表示"没有对象"，即该处不应该有值，转为数值时为0;
     * undefined表示"缺少值"，就是此处应该有一个值，转为数值时为NaN。
     * @returns 
     */
    public static getSingletonWordTree(): TrieTree {
        this.autoLoader();
        return this.wordTree;
    }

    public static getIssueTree(): TrieTree {
        this.autoLoader();
        return this.issueTree;
    }

    public static getPhraseMap(): Map<string, string> {
        this.autoLoader();
        return this.phraseMap;
    }
}