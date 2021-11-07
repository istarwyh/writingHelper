
import * as vscode from 'vscode';
import * as lsp from 'vscode-languageclient';
import { s_to_ms } from './utils/TimeUtils';
import WritingCatClient from './WritingCatClient';
import * as fs from 'fs';
import WordCounter from './utils/WordCounter';

/**
 * Represent a vscode command with an ID and an impl function `execute`.
 */
interface Command {
	id: string;
	/*通过某种承诺达成(vscode 执行disposable之后)*/
	execute(): Promise<vscode.Disposable> | void;
}

/**
 * 重启WritingCatClient
 * @param client language client
 */
function restartServer(client: lsp.LanguageClient): Command {
	return {
		id: 'restartServer',
		async execute() {
			await client.stop();
			return client.start();
		},
	};
}
/**
 * 提示自Extension激活已经过了多少时间
 * TODO 应该是从打开一个文本开始⌛️。1.识别文本重置时间；2.识别不同的文本
 */
function sayElapseTime(): Command {
	return {
		id: 'sayElapseTime',
		execute() {
			let curDate = new Date();
			let ms_to_s_diff: number = 1000;
			let elapseTime = (curDate.getTime() - WritingCatClient.getIniDate().getTime()) / ms_to_s_diff;
			vscode.window.showWarningMessage("It has been " + s_to_ms(elapseTime));
		}
	}
}

function showWordCount(): Command {
	return {
		id:'showWordCount',
		execute(){
			let editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}
			let doc = editor.document;
			let WordCount = WordCounter.countWord(doc);
			vscode.window.showInformationMessage(`English:${WordCount.englishWordCount}, All:${WordCount.allWordCount}`);
		}
	}
}

// function pullAndUpdateCollocations(): Command {
// 	return {
// 		id: 'pullAndUpdateCollocations',
// 		execute() {
// 			(async () => {
// 				// 1. 同步获取所有语料库 
// 				const content = await http.get("127.0.0.1:8080/getAllCollocationList","");
// 				console.log(content);
// 				try {
// 					// 2. 同步更新现有语料库 本地fs		
// 					const collocationPath = '/Users/yihui/Desktop/Learning/Codes/writing-cat/server/src/repository/Collocations.json';
// 					fs.writeFileSync(collocationPath, "")
// 				  } catch (err) {
// 					console.error(err)
// 				  }
// 				vscode.window.showInformationMessage("It has been updated :-)");
// 			})();
// 		}
// 	}
// }

export function registerCommands(client: lsp.LanguageClient): vscode.Disposable[] {
	const commands: Command[] = [
		restartServer(client),
		sayElapseTime(),
		showWordCount()
	];
	const disposables = commands.map((command) => {
		return vscode.commands.registerCommand(command.id, command.execute);
	});
	return disposables;
}