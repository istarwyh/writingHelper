class CollocationDetail {
    issue: [string];
    collocation: string;
    note: string;
    interception: [Interception];
    public constructor(issue: [string], collocation: string, note: string, interception: [Interception]) {
        this.issue = issue;
        this.collocation = collocation;
        this.note = note;
        this.interception = interception;
    }
}