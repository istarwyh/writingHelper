import {
	createConnection,
	InitializeParams,
	InitializeResult,
	ProposedFeatures,
	TextDocumentSyncKind,
	_Connection
} from 'vscode-languageserver/node';
import CComple from './controller/CComple';
import CHome from './controller/CHome';
import { Document } from './utils/impl/Document';

export default class Connection{
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
	static connection : _Connection;
	public constructor(){
		Connection.connection = createConnection(ProposedFeatures.all);
		Connection.connection.onInitialize((params: InitializeParams) => {
			const result: InitializeResult = {
				capabilities: {
					textDocumentSync: TextDocumentSyncKind.Incremental,
					// Tell the client that this server supports code completion.
					completionProvider: {
						resolveProvider: true,
						triggerCharacters: CComple.completionTriggerChars
						// allCommitCharacters: ["\t"]
					}
				}
			};
			return result;
		});
		Connection.connection.onInitialized(() => {
			CHome.sayHello(Connection.connection);
			Connection.connection.console.log('-----------Connection Initialized-------------');
		});
		// Make the text document manager listen on the connection
		// for open, change and close text document events
		Document.documents.listen(Connection.connection);
		// Listen on the connection
		Connection.connection.listen();
	}
	public static buildConnection(): _Connection{
		if(this.connection === null || this.connection === undefined){
			new Connection();
		}
		return this.connection;
	}
}