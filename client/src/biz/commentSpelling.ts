import * as ts from 'typescript';
import { promises as fs } from 'fs';
import * as path from 'path';

export interface Speller {
    correct(word: string): boolean;
    suggest(word: string): string[];
}
export interface SpellingProblem {
    word: string;
    start: number;
    end: number;
    suggestions: string[];
}

/** Load bundled Hunspell data locally; no document text leaves the extension. */
export async function createEnglishSpeller(): Promise<Speller> {
    const directory = path.dirname(require.resolve('dictionary-en'));
    const [aff, dic] = await Promise.all([
        fs.readFile(path.join(directory, 'index.aff')),
        fs.readFile(path.join(directory, 'index.dic')),
    ]);
    return require('nspell')({ aff, dic });
}

/** Keep sentence-initial capitalization without changing dictionary proper names. */
export function spellingSuggestions(word: string, speller: Speller): string[] {
    return matchCapitalization(word, speller.suggest(word.toLowerCase()).slice(0, 3));
}

function matchCapitalization(word: string, suggestions: string[]): string[] {
    return suggestions.map(suggestion => /^[A-Z]/.test(word)
        ? suggestion.charAt(0).toUpperCase() + suggestion.slice(1) : suggestion);
}

/** Inspect parser-recognized comments, excluding strings, regexes and template text. */
export function diagnoseComments(
    text: string,
    speller: Speller,
    ignoreWords: string[] = [],
): SpellingProblem[] {
    if (text.length > 500_000) return [];
    const source = ts.createSourceFile('comments.ts', text, ts.ScriptTarget.Latest, true);
    const ranges = new Map<number, ts.CommentRange>();
    const identifiers = new Set<string>(ignoreWords.map(word => word.toLowerCase()));
    function add(items: ts.CommentRange[] | undefined) {
        for (const range of items || []) ranges.set(range.pos, range);
    }
    function visit(node: ts.Node) {
        add(ts.getLeadingCommentRanges(text, node.getFullStart()));
        add(ts.getTrailingCommentRanges(text, node.getFullStart()));
        add(ts.getTrailingCommentRanges(text, node.getEnd()));
        if (ts.isIdentifier(node)) identifiers.add(node.text.toLowerCase());
        // Include punctuation and keyword tokens omitted by forEachChild. The parser
        // retains regex/template boundaries, unlike a context-free scanner pass.
        // JSDoc's parsed nodes are inside an already collected comment.
        if (node.kind !== ts.SyntaxKind.JSDocComment) node.getChildren(source).forEach(visit);
    }
    visit(source);
    add(ts.getLeadingCommentRanges(text, 0));
    const problems: SpellingProblem[] = [];
    const checked = new Map<string, string[] | null>();
    for (const range of [...ranges.values()].sort((a, b) => a.pos - b.pos)) {
        let prose = text.slice(range.pos, range.end);
        // Mask rather than remove text to retain VS Code's UTF-16 offsets.
        const mask = (value: string) => ' '.repeat(value.length);
        prose = prose.replace(/```[\s\S]*?```|`[^`\n]*`/g, mask)
            .replace(/https?:\/\/[^\s<>]+|\b[\w.+-]+@[\w.-]+\.[A-Za-z]+\b/g, mask)
            .replace(/@\w+|\{[^}\n]*\}/g, mask);
        const words = /\b[A-Za-z]+(?:'[A-Za-z]+)?\b/g;
        let match: RegExpExecArray | null;
        while ((match = words.exec(prose))) {
            const word = match[0];
            const lower = word.toLowerCase();
            if (word.length < 3 || /^[A-Z]+$/.test(word) || /[a-z][A-Z]/.test(word)
                || identifiers.has(lower)) continue;
            if (!checked.has(lower)) {
                checked.set(lower, speller.correct(word) || speller.correct(lower)
                    ? null : speller.suggest(lower).slice(0, 3));
            }
            const suggestions = checked.get(lower);
            if (suggestions !== null) {
                problems.push({ word, start: range.pos + match.index,
                    end: range.pos + match.index + word.length,
                    suggestions: matchCapitalization(word, suggestions || []) });
            }
            if (problems.length >= 100) return problems;
        }
    }
    return problems;
}
