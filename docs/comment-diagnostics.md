# English spelling in code comments

Enable `writingcat.commentDiagnostics.enabled` in VS Code settings to check
English spelling in JavaScript and TypeScript comments. It is disabled by default.
Misspellings appear as informational diagnostics with up to three quick fixes.
Use `writingcat.commentDiagnostics.ignoreWords` for project vocabulary and names.

The TypeScript parser identifies actual comments. Strings, regex literals and
template text are excluded; comments inside template expressions are checked.
URLs, email addresses, inline/fenced code, API acronyms and code identifiers are
ignored. Chinese text is not spellchecked. This checks spelling, not grammar or
writing style. JSX/TSX and other programming languages are outside this initial scope.

Hunspell-compatible `nspell` uses the English dictionary bundled with the extension.
Checking comments and applying quick fixes makes no network requests. Existing
prose completion features keep their current behavior. Diagnostics refresh after
edits and settings changes and clear when disabled or when a document closes.
Documents above 500,000 UTF-16 characters are skipped; each document has at most
100 diagnostics. Missing dictionary data fails gracefully with a single warning.

Development: run `npm run test:comments`. The client and server dependencies must
also be installed (`npm ci --ignore-scripts`, `npm ci --prefix client --ignore-scripts`,
`npm ci --prefix server --ignore-scripts`). The VSIX includes the parser, speller,
dictionary and speller's `is-buffer` runtime dependency.
