import { commands, Disposable } from 'vscode';

export default class buildMove {
    /**
     * 移动到文本末尾
     * @returns 
     */
    public static buildMove(): Disposable {
        return commands.registerCommand('move2End', () => {
            commands.executeCommand('cursorBottom');
        });
    }
}