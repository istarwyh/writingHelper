import { MarkupContent, MarkupKind, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { IDocument } from '../IDocument';

export class Document implements IDocument {
	// Create a simple text document manager.
	static documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

	static getDocumentFromURI(uri: string): TextDocument {
		let _result = this.documents.get(uri);
		if (!_result) {
			throw Error(`Cannot get TextDocument from uri ${uri}!`);
		}
		return _result;
	}
	static getMarkdownContent(title: string, content: string): MarkupContent {
		let markdown: MarkupContent = {
			kind: MarkupKind.Markdown,
			value: [
				title,
				'```typescript',
				content,
				'```'].join("\n")
		};
		return markdown;
	}
}