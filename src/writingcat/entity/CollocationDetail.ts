class CollocationDetail {
    static issue: [string];
    static collocation: string;
    static note: string;
    static wordKey: string;
    static interception: [Interception];
    public constructor(issue: [string], collocation: string, note: string, wordKey: string, interception: [Interception]) {
        issue = issue;
        collocation = collocation;
        note = note;
        wordKey = wordKey;
        interception = interception;
    }
}
export default CollocationDetail;
// In financial markets, options and futures are examples of zero-sum games, excluding transaction costs.