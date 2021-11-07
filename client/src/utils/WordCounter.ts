import { TextDocument } from "vscode";

interface WordCount {
  englishWordCount: number;
  allWordCount: number;
}
export default class WordCounter {
  /**
   *
   * @param doc Represents a text document, such as a source file.
   * @returns All && English words's number
   */
  static countWord(doc: TextDocument): WordCount {
    let docContent = doc.getText();
    // Parse out unwanted whitespace so the split is accurate
    docContent = docContent.replace(/\s+/g, "");
    let allWordCount = docContent.length;

    // let chineseWordContent = docContent.replace(/[^\u4e00-\u9fa5]/g, '');
    let englishWordContent = docContent.replace(/[^A-Za-z]/g, "");
    let englishWordCount = englishWordContent.length;
    return { englishWordCount, allWordCount };
  }
}
