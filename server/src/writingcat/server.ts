import {
	CompletionItem,
	TextDocumentPositionParams,
	TextEdit,
	WorkspaceChange,
	WorkspaceEdit,
} from 'vscode-languageserver/node';
import AutoLoader from './AutoLoader';
import Connection from './Connection';
import CComple, { provideCompletionItems } from './controller/CComple';
import { Document } from './utils/impl/Document';
import UserSettings from './UserSettings';

// export default class WritingCatServer {
// 	static userSeter = UserSettings.iniUserSettings();
// }
const connection = Connection.buildConnection();
UserSettings.iniUserSettings();
AutoLoader.buildSingleTrie();
/**
 * 词伙补全响应Completion的请求执行回调函数: the initial list of the completion items handler
 */
connection.onCompletion(
	// The pass parameter contains the position of the text document in which code complete got requested. 
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		return provideCompletionItems(Document.getDocumentFromURI(_textDocumentPosition.textDocument.uri), _textDocumentPosition.position);
	}
);
// 事实上可以先拿到item,然后再对每个item进行请求,这样就可以解决不连续补全的问题...todo
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return CComple.modifyCompletionItem(item);
	}
);
/**
 * 想要在输入的时候删除此前输入的字符以解决无法用补全的字符覆盖触发字符的缺点
 * 当你知道这个功能肯定能实现,但就是找不到实现方法时,你会怎么办?!!todo
 */
// connection.workspace.connection.onDidChangeTextDocument((e) => {
// 	const uri = e.textDocument.uri
// 	const text = e.contentChanges[0].text
// 	const range: Range = e.contentChanges[0].range
// 	if (text !== '') {
// 		// 删除用户输入的字符
// 		let delRange = {
// 			start: { line: range.start.line, character: range.start.character },
// 			end: { line: range.end.line, character: range.end.character + 1 }
// 		}
// 		let textEdit: TextEdit = {
// 			range: delRange,
// 			newText: ''
// 		}
// 		let textEdits = new Array<TextEdit>(); textEdits.push(textEdit);
// 		let WorkspaceEdit: WorkspaceEdit = {
// 			changes: { uri: textEdits }
// 		}
// 		connection.workspace.applyEdit(WorkspaceEdit);
// 		// const editAction = new WorkspaceChange();
// 		// editAction.getTextEditChange(uri).delete(delRange);
// 	}
// })