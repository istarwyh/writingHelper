import { Interpretation } from "./Interpretation";

export default class CollocationDetail {
    static issue: [string];
    static collocation: string;
    static note: string;
    static wordKey: string;
    static interpretation: [Interpretation];
    public constructor(issue: [string], collocation: string, note: string, wordKey: string, interpretation: [Interpretation]) {
        issue = issue;
        collocation = collocation;
        note = note;
        wordKey = wordKey;
        interpretation = interpretation;
    }

    public static issueStr(): string {
        return "issues";
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
        return "wordKeys";
    }
    public static interpretationStr(): string {
        return "interpretation";
    }
}
