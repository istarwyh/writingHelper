import { CompletionItem } from 'vscode-languageserver-types';
import AutoLoader from '../AutoLoader';
import CompleHandler from './abstractComple';
import Blank from './impl/Blank';
import IssueComple from './impl/IssueComple';
import IssueKeyCue from './impl/IssueKeyCue';
import PhrasekeyComple from './impl/PhraseKeyComple';
import PhrasesComple from './impl/PhrasesComple';

export default class CompleHandlerChain {
	static readonly issueKeyCue = new IssueKeyCue();
	static readonly phrasekeyComple = new PhrasekeyComple();
	static readonly phrasesComple = new PhrasesComple();
	static readonly issueComple = new IssueComple();
	static readonly blank = new Blank();
	static readonly header: CompleHandler = CompleHandlerChain.constructCompleHandlerChain();

	public static handleComple(text: string): CompletionItem[] {
		return CompleHandlerChain.header.provideCompletionItems(text);
	}

	private static constructCompleHandlerChain(): CompleHandler {
		let handlers = CompleHandlerChain.getHandlers();
		let header: CompleHandler = handlers[0];
		let indexOfHandlers = 0;
		this.buildBiTreeByPreOrder(header, handlers, indexOfHandlers);
		return header;
	}

	/**
	 * 按照层序遍历填充数组用以层序遍历建树
	 */
	private static getHandlers() {
		let handlers = new Array<CompleHandler>(6);
		handlers[0] = CompleHandlerChain.blank;
		handlers[1] = CompleHandlerChain.issueComple;
		handlers[2] = CompleHandlerChain.phrasesComple;
		handlers[3] = CompleHandlerChain.issueKeyCue;
		handlers[4] = null;
		handlers[5] = CompleHandlerChain.phrasekeyComple;
		return handlers;
	}

	private static buildBiTreeByPreOrder(root: CompleHandler, handlers: Array<CompleHandler>, index: number): void {
		if (root == null) {
			return;
		}
		let leftIndex = 2 * index + 1;
		if (leftIndex > handlers.length) {
			return;
		}
		root.setLeft(handlers[leftIndex]);

		let rightIndex = 2 * index + 2;
		if (rightIndex > handlers.length) {
			return;
		}
		root.setRight(handlers[rightIndex]);

		this.buildBiTreeByPreOrder(root.getLeft(), handlers, leftIndex);
		this.buildBiTreeByPreOrder(root.getRight(), handlers, rightIndex);
	}

}