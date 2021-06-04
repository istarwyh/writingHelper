import {
	createConnection,
	InitializeParams,
	InitializeResult,
	ProposedFeatures,
	TextDocumentSyncKind,
	Connection
} from 'vscode-languageserver';
import AutoLoader from './AutoLoader';
import CComple from './controller/CComple';
import CHome from './controller/CHome';
import Document from './utils/impl/Document';

export default class ConnectCat {
	// Create a connection for the server, using Node's IPC as a transport.
	// Also include all preview / proposed LSP features.
	static connection: Connection;
	public constructor() {
		ConnectCat.connection = createConnection(ProposedFeatures.all);
		ConnectCat.connection.onInitialize((params: InitializeParams) => {
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
		ConnectCat.connection.onInitialized(() => {
			AutoLoader.logger.debug('-----------Connection Initialized-------------');
			CHome.sayIniTime(ConnectCat.connection);
		});
		// Make the text document manager listen on the connection
		// for open, change and close text document events
		Document.documents.listen(ConnectCat.connection);
		// Listen on the connection
		ConnectCat.connection.listen();
	}
	public static buildConnection(): Connection {
		if (this.connection === null || this.connection === undefined) {
			new ConnectCat();
		}
		return this.connection;
	}
}