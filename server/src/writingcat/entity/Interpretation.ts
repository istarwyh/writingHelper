/**
 * See the structure of Collocations.json
 */
export class Interpretation {
    static majority: number | null;
    static Chinese: string | null;
    static English: string | null;
    static sentence: string | null;
    public constructor(majority: number, Chinese: string | null, English: string | null, sentence: string | null) {
        majority = majority;
        Chinese = Chinese;
        English = English;
        sentence = sentence;
    }
    public static ChineseStr(): string {
        return "Chinese";
    }
    public static EnglishStr(): string {
        return "English";
    }
    public static sentenceStr(): string {
        return "sentence";
    }
}