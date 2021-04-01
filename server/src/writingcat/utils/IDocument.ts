import { TextDocument } from 'vscode-languageserver-textdocument';
import { MarkupContent } from 'vscode-languageserver/node';


export interface IDocumentBuilder<T extends IDocument> {
	/**
 	 * 从文本文件的URI中得到文本的TextDocument
 	 */
	getDocumentFromURI(uri: string): TextDocument;
	/**
	 * 
	 * @param title 显示在补全旁边的小文章标题
	 * @param content 小文章内容
	 */
	getMarkupContent(title: string, content: string): MarkupContent;
}

export interface IDocument {
}