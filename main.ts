import lex from './lexer';
import parse from './parser';

const code = "1 + 2 * 3 - 4 / 5";

const tokens = lex(code);

console.log("Tokens:", tokens);

const ast = parse(tokens);

console.log("AST:", ast);