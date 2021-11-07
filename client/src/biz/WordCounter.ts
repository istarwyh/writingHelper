import {
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  TextDocument,
  window,
  workspace,
} from "vscode";
import { encourageByWordCount } from '../commands';
import { includedByDocumentTypeEnum } from '../common/DocumentTypeEnum';

export default class WordCounter {

  /**
   * the bottom status bar of vscode 
   */
  private static _statusBarItem: StatusBarItem;

  /**
   * @see package.json in the root 
   */
  static showEnglishCount : boolean;

  /**
   * @see package.json in the root 
   */
  static showAllCount : boolean;

  /**
   * @see package.json in the root 
   */
  static targetWordCount: number;

  static allWordCount: number;

  static englishWordCount: number;

  static{
    const configuration = workspace.getConfiguration();
    this.showEnglishCount = configuration.get("writingcat.showEnglishCount");
    this.showAllCount = configuration.get("writingcat.showAllCount");
    this.targetWordCount = configuration.get("writingcat.targetWordCount");
  }

  static showWordCountStatusBar() {
    // the change and editor activation events will be added in subscriptions
    let subscriptions: Disposable[] = [];
    window.onDidChangeTextEditorSelection(
      WordCounter.updateWordCountOfStatusBar,
      this,
      subscriptions
    );
    window.onDidChangeActiveTextEditor(
      WordCounter.updateWordCountOfStatusBar,
      this,
      subscriptions
    );

    // create a combined disposable from both event subscriptions
    return Disposable.from(...subscriptions);
  }

  private static updateWordCountOfStatusBar() {
    // Create as needed
    if (!this._statusBarItem) {
      this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    }
    // Get the current text editor
    let editor = window.activeTextEditor;
    if (!editor) {
      this._statusBarItem.hide();
      return;
    }
    let doc = editor.document;
    if (includedByDocumentTypeEnum(doc.languageId)) {
      this.countWord(doc);
      setStatusBar();
    } else {
      this._statusBarItem.hide();
    }

    function setStatusBar() {
      let textArr = [];
      if (this.showEnglishCount) {
        textArr.push(`English: ${this.englishWordCount}`);
      }
      if (this.showAllCount) {
        textArr.push(`All: ${this.allWordCount} `);
      }
      if (this.englishWordCount > this.targetWordCount) {
        this._statusBarItem.color = "#b1f9f9";
      } else {
        this._statusBarItem.color = "#a5d610";
      }
      this._statusBarItem.tooltip = textArr.join(", ");
      this._statusBarItem.text = "$(pencil) " + textArr.join(", ");
      this._statusBarItem.show();
      this._statusBarItem.command = encourageByWordCount().id;
    }
  }

  /**
   *
   * @param doc Represents a text document, such as a source file.
   * @returns All && English words's number
   */
  private static countWord(doc: TextDocument) {
    let docContent = doc.getText();
    // Parse out unwanted whitespace so the split is accurate
    docContent = docContent.replace(/\s+/g, "");
    WordCounter.allWordCount = docContent.length;

    // let chineseWordContent = docContent.replace(/[^\u4e00-\u9fa5]/g, '');
    let englishWordContent = docContent.replace(/[^A-Za-z]/g, "");
    WordCounter.englishWordCount = englishWordContent.length;
  }

  /**
   * 
   * @returns 用于提示的文案
   */
  static encourage():string {
    if(this.englishWordCount > this.targetWordCount ){
      return `Congratulations , you have done it well:-)`;
    }else{
      return `Come on, it's ${this.targetWordCount} words short of ${this.targetWordCount - this.englishWordCount} words!`;
    }
  }

  /**
   * TODO: 这里似乎会变成字符串比较,结果出乎意料
   * @returns 8 > 200 -> true
   */
  static hasFinished(): boolean{
    return this.englishWordCount > this.targetWordCount ;
  }

}