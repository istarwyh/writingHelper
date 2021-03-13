class Interception {
    majority: number | null;
    Chinese: string | null;
    English: string | null;
    sentence: string | null;
    public constructor(majority: number, Chinese: string | null, English: string | null, sentence: string | null) {
        this.majority = majority;
        this.Chinese = Chinese;
        this.English = English;
        this.sentence = sentence;
    }
}