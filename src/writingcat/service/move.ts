import * as vscode from 'vscode';

function moveBeginning(): void {
    vscode.commands.executeCommand('cursorTop');
}
function moveEnding(): void {
    vscode.commands.executeCommand('cursorBottom');
}

const disposable_begin = vscode.commands.registerCommand('extension.moveBeginning', moveBeginning);
const disposable_end = vscode.commands.registerCommand('extension.moveEnding', moveEnding);
module.exports = function(context: { subscriptions: any[]; }){
    context.subscriptions.push(disposable_begin);
    context.subscriptions.push(disposable_end);
};
