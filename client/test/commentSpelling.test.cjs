const { test, before } = require('node:test');
const assert = require('node:assert/strict');
const { createEnglishSpeller, diagnoseComments } = require('../out/biz/commentSpelling');
let speller;
before(async () => { speller = await createEnglishSpeller(); });
const words = text => diagnoseComments(text, speller).map(problem => problem.word);

test('reports genuine line/block comment mistakes with local suggestions', () => {
    const problems = diagnoseComments('// Please recieve the result.\n/* A seperate comment. */', speller);
    assert.deepEqual(problems.map(problem => problem.word), ['recieve', 'seperate']);
    assert.ok(problems[0].suggestions.includes('receive'));
    assert.ok(problems[1].suggestions.includes('separate'));
});
test('excludes code, strings, regular expressions and template text', () => {
    assert.deepEqual(words('const value = "// recieve";\nconst re = /\\/\\/recieve/;\nconst template = `/* recieve */ ${1}`;'), []);
    assert.deepEqual(words('const value = `text ${1 /* recieve */} more`;'), ['recieve']);
});
test('finds comments among object members, nested statements and at EOF', () => {
    assert.deepEqual(words('const data = { /* recieve */ key: 1 };\nfunction f() { return 2; // seperate\n}\n// recieve'), ['recieve', 'seperate', 'recieve']);
});
test('skips URLs, email, inline/fenced code, identifiers and configurable names', () => {
    const input = '// https://example.com/recieve test@recieve.example `seperate` API loadWidget some_identifier\n/* ```\nrecieve\n``` */\nconst unusualname = 1; // unusualname Xiaohui recieve';
    assert.deepEqual(diagnoseComments(input, speller, ['xiaohui']).map(problem => problem.word), ['recieve']);
});
test('keeps UTF-16 offsets correct after Chinese and emoji text', () => {
    const input = '// 中文 👩🏽‍💻 Please recieve this.\n';
    const [problem] = diagnoseComments(input, speller);
    assert.equal(problem.start, input.indexOf('recieve'));
    assert.equal(input.slice(problem.start, problem.end), 'recieve');
});
test('ignores JSDoc tags, types and identifiers while checking prose', () => {
    assert.deepEqual(words('/** @param {OddType} optionName Please recieve input. */\nfunction f(optionName) {}'), ['recieve']);
});
test('bounds diagnostic work and uses a case-insensitive ignore list', () => {
    assert.equal(diagnoseComments('// ' + 'recieve '.repeat(120), speller).length, 100);
    assert.deepEqual(diagnoseComments('// recieve', speller, ['RECIEVE']), []);
    assert.deepEqual(diagnoseComments(' '.repeat(500_001), speller), []);
});
