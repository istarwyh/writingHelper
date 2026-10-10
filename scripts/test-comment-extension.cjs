const path = require('node:path');
const fs = require('node:fs');
const os = require('node:os');
const { runTests } = require('../client/node_modules/vscode-test');
const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'writinghelper-editor-'));
runTests({
    version: '1.95.3',
    extensionDevelopmentPath: path.resolve(__dirname, '..'),
    extensionTestsPath: path.resolve(__dirname, '../client/test/commentDiagnostics.extension.cjs'),
    launchArgs: ['--no-sandbox', '--disable-gpu', '--disable-workspace-trust', '--skip-welcome', '--skip-release-notes', '--disable-extensions', '--user-data-dir', path.join(directory,'user'), '--extensions-dir', path.join(directory,'extensions')],
}).then(() => { fs.rmSync(directory, {recursive:true,force:true}); process.exit(0); })
.catch(error => { console.error(error.message); fs.rmSync(directory,{recursive:true,force:true}); process.exit(1); });
