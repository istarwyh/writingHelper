import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

export default class WritingCatClient {
	static client: LanguageClient;
	serverModule: string;
	debugOptions: { execArgv: string[]; };
	/**
	 * If the extension is launched in debug mode then the debug server options are used
	   Otherwise the run options are used
	 */
	serverOptions: ServerOptions;
	clientOptions: LanguageClientOptions;

	/**
	 * 
	 * @param context vscode build-in ExtensionContext
	 * @param debuggerPort --inspect=debuggerPort: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	 * @param logPanelName 
	 */
	public constructor(context: ExtensionContext, debuggerPort: number, logPanelName: string) {
		this.serverModule = context.asAbsolutePath(
			path.join('server', 'out', 'server.js')
		);
		this.debugOptions = { execArgv: ['--nolazy', '--inspect=' + debuggerPort] };
		this.serverOptions = {
			run: { module: this.serverModule, transport: TransportKind.ipc },
			debug: {
				module: this.serverModule,
				transport: TransportKind.ipc,
				options: this.debugOptions
			}
		};
		this.clientOptions = {
			// Register the server for plain text documents
			documentSelector: [{ scheme: 'file', language: 'plaintext' }],
			synchronize: {
				// Notify the server about file changes to '.clientrc files contained in the workspace
				fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
			}
		};
		WritingCatClient.client = new LanguageClient(
			'writingcat',
			logPanelName,
			this.serverOptions,
			this.clientOptions
		);
	}
	public static buildWritingCatClient(context: ExtensionContext, debuggerPort: number, logPanelName: string) {
		if (WritingCatClient.client === null || WritingCatClient.client === undefined) {
			new WritingCatClient(context, debuggerPort, logPanelName);
		}
		return this.client;
	}
}