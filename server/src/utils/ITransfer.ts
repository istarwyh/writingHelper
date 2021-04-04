import Transfer from './impl/Transfer';

export default interface ITransfer {
    /**
     * 将单词大写转化为小写
     */
    upper2proto(): any;
    /**
     * 将动词现在进行时形式转化为原型
     */
    ing2proto(): any;
    /**
     * 将动词被动语态转化为原型
     */
    passive2proto(): any;
    /**
     * 将动词过去式转化为原型
     */
    past2proto(): any;

}