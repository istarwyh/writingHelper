import * as vscode from 'vscode';
import { createEnglishSpeller, diagnoseComments, Speller } from './commentSpelling';

const languages = new Set(['javascript', 'typescript']);
const source = 'writingHelper comments';

export function registerCommentDiagnostics(): vscode.Disposable {
    const collection = vscode.languages.createDiagnosticCollection(source);
    const timers = new Map<string, ReturnType<typeof setTimeout>>();
    let speller: Promise<Speller> | undefined;
    let disposed = false;
    let warned = false;
    const configuration = (document: vscode.TextDocument) =>
        vscode.workspace.getConfiguration('writingcat.commentDiagnostics', document.uri);

    function schedule(document: vscode.TextDocument) {
        const key = document.uri.toString();
        const pending = timers.get(key);
        if (pending) clearTimeout(pending);
        timers.delete(key);
        if (!languages.has(document.languageId) || !configuration(document).get('enabled', false)) {
            collection.delete(document.uri);
            return;
        }
        timers.set(key, setTimeout(() => {
            timers.delete(key);
            void check(document);
        }, 250));
    }
    async function check(document: vscode.TextDocument) {
        const version = document.version;
        try {
            if (!speller) speller = createEnglishSpeller();
            const dictionary = await speller;
            if (disposed || document.isClosed || document.version !== version
                || !configuration(document).get('enabled', false)) return;
            const ignored = configuration(document).get<string[]>('ignoreWords', []);
            const problems = diagnoseComments(document.getText(), dictionary, ignored);
            collection.set(document.uri, problems.map(problem => {
                const diagnostic = new vscode.Diagnostic(
                    new vscode.Range(document.positionAt(problem.start), document.positionAt(problem.end)),
                    `Possible spelling mistake: ${problem.word}`,
                    vscode.DiagnosticSeverity.Information,
                );
                diagnostic.source = source;
                diagnostic.code = problem.word;
                return diagnostic;
            }));
        } catch {
            speller = undefined; // A subsequent edit can retry a failed dictionary load.
            if (disposed || document.isClosed || document.version !== version) return;
            collection.delete(document.uri);
            if (!warned) {
                warned = true;
                void vscode.window.showWarningMessage('writingHelper could not load its bundled English dictionary.');
            }
        }
    }
    const fixes = vscode.languages.registerCodeActionsProvider(
        [...languages].map(language => ({ language })), {
            async provideCodeActions(document, range, context) {
                if (!configuration(document).get('enabled', false)) return [];
                const actions: vscode.CodeAction[] = [];
                const version = document.version;
                try {
                    if (!speller) speller = createEnglishSpeller();
                    const dictionary = await speller;
                    if (disposed || document.version !== version || !configuration(document).get('enabled', false)) return [];
                    for (const diagnostic of context.diagnostics) {
                        if (diagnostic.source !== source || typeof diagnostic.code !== 'string'
                            || document.getText(diagnostic.range) !== diagnostic.code) continue;
                        for (const suggestion of dictionary.suggest(diagnostic.code.toLowerCase()).slice(0, 3)) {
                            const action = new vscode.CodeAction(`Replace with '${suggestion}'`, vscode.CodeActionKind.QuickFix);
                            action.diagnostics = [diagnostic];
                            action.edit = new vscode.WorkspaceEdit();
                            action.edit.replace(document.uri, diagnostic.range, suggestion);
                            actions.push(action);
                        }
                    }
                } catch { return []; }
                return actions;
            },
        }, { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] },
    );
    const subscriptions = [
        collection, fixes,
        vscode.workspace.onDidOpenTextDocument(schedule),
        vscode.workspace.onDidChangeTextDocument(event => schedule(event.document)),
        vscode.workspace.onDidCloseTextDocument(document => {
            const key = document.uri.toString();
            const pending = timers.get(key);
            if (pending) clearTimeout(pending);
            timers.delete(key);
            collection.delete(document.uri);
        }),
        vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('writingcat.commentDiagnostics')) {
                vscode.workspace.textDocuments.forEach(schedule);
            }
        }),
    ];
    vscode.workspace.textDocuments.forEach(schedule);
    return new vscode.Disposable(() => {
        disposed = true;
        timers.forEach(timer => clearTimeout(timer));
        timers.clear();
        subscriptions.forEach(subscription => subscription.dispose());
    });
}
