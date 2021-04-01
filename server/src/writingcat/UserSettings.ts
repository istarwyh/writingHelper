import { Document } from './utils/impl/Document';
import https from 'https';
class UserSettings {
	static maxNumberOfProblems: number = 10;
	private static hasNetWork: boolean;
	// Cache the settings of all open documents
	documentSettings: Map<string, Thenable<UserSettings>> = new Map();
	public constructor() {
		this.refreshNetWorkState();
		// Only keep settings for open documents
		Document.documents.onDidClose(e => {
			this.documentSettings.delete(e.document.uri);
		});
	}
	public static iniUserSettings(): UserSettings {
		return new UserSettings();
	}
	public static getNetWorkState(): boolean {
		return UserSettings.hasNetWork;
	}
	public refreshNetWorkState() {
		// const https = require('https');
		let option: string = "https://www.baidu.com/";
		// any async code will execute only after the main thread is available!
		// 一般的异步:Event发生(时间流逝，用户与鼠标的交互或数据的到达)时通过回调机制调用异步函数
		// 我想要的异步:先执行异步函数,Event发生时再拿结果
		// 如果同时依赖多个异步的结果,那么Promise.then()再做或者await
		let req = https.request(option, (resp: any) => {
			// 然而这里什么时候拿到的结果我是不知道的,但是预计不会再后面调用Comple的时候依然拿不到
			UserSettings.hasNetWork = (resp.statusCode == '200' || resp.statusCode == '302');
			// console.log(resp.statusCode + Utils.getCurTime("  "));
		});
		// If you don't catch error, the programming will be crased
		req.on('error', function (error: any) {
			console.log(error);
			return false;
		});
		req.end();
	}
}
export default UserSettings;