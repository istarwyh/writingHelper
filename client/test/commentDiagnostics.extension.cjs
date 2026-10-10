const vscode = require('vscode');
const assert = require('node:assert/strict');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(check) {
    const deadline = Date.now() + 8000;
    while (Date.now() < deadline) {
        if (check()) return;
        await pause(50);
    }
    assert.fail('Timed out waiting for comment diagnostics');
}
exports.run = async () => {
    const configuration = vscode.workspace.getConfiguration('writingcat.commentDiagnostics');
    const oldEnabled = configuration.get('enabled');
    const oldIgnored = configuration.get('ignoreWords');
    const document = await vscode.workspace.openTextDocument({language:'javascript', content:'const value = "recieve"; // Please recieve this.\n'});
    const diagnostics = () => vscode.languages.getDiagnostics(document.uri).filter(item => item.source === 'writingHelper comments');
    try {
        await vscode.extensions.getExtension('istarwyh.writinghelper').activate();
        await vscode.window.showTextDocument(document);
        await pause(500);
        assert.equal(diagnostics().length, 0, 'disabled by default');
        await configuration.update('enabled', true, vscode.ConfigurationTarget.Global);
        await waitFor(() => diagnostics().length === 1);
        assert.equal(document.getText(diagnostics()[0].range), 'recieve');
        let fix;
        for (let attempt = 0; attempt < 10 && !fix; attempt++) {
            try {
                const actions = await vscode.commands.executeCommand('vscode.executeCodeActionProvider', document.uri, diagnostics()[0].range, vscode.CodeActionKind.QuickFix.value);
                fix = actions.find(action => action.title === "Replace with 'receive'");
            } catch (error) { if (attempt === 9) throw error; }
            if (!fix) await pause(100);
        }
        assert.ok(fix && fix.edit, 'local spelling quick fix exists');
        await vscode.workspace.applyEdit(fix.edit);
        await waitFor(() => diagnostics().length === 0);
        assert.equal(document.getText(), 'const value = "recieve"; // Please receive this.\n');
        const edit = new vscode.WorkspaceEdit();
        edit.replace(document.uri, new vscode.Range(0, 0, 1, 0), '// recieve\n');
        await vscode.workspace.applyEdit(edit);
        await waitFor(() => diagnostics().length === 1);
        await configuration.update('ignoreWords', ['RECIEVE'], vscode.ConfigurationTarget.Global);
        await waitFor(() => diagnostics().length === 0);
        await configuration.update('ignoreWords', [], vscode.ConfigurationTarget.Global);
        await waitFor(() => diagnostics().length === 1);
        await configuration.update('enabled', false, vscode.ConfigurationTarget.Global);
        await waitFor(() => diagnostics().length === 0);
        console.log('VS Code: activation/default/diagnostics/quick-fix/edit/ignore/disable passed');
    } finally {
        await configuration.update('enabled', oldEnabled, vscode.ConfigurationTarget.Global);
        await configuration.update('ignoreWords', oldIgnored, vscode.ConfigurationTarget.Global);
    }
};
