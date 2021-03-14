import { Interception } from "./Interception";

export default class CollocationDetail {
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

    public static issueStr(): string {
        return "issue";
    }
    public static collocationStr(): string {
        return "collocation";
    }
    public static noteStr(): string {
        return "note";
    }
    /**
     * wordKeyName
     */
    public static wordKeyStr(): string {
        return "wordKey";
    }
    public static interceptionStr(): string {
        return "interception";
    }
}
