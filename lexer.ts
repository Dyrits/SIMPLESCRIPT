export enum TokenType {
  Number = "number",
  Operator = "operator",
}

export type Token = { type: TokenType.Number, value: number } | { type: TokenType.Operator, value: string };

function lex(code: string): { type: string, value: string | number }[]  {
  let cursor = 0;
  const tokens: { type: string, value: string | number }[] = [];
  const operators = ['+', '-', '*', '/'];
  const number = /[0-9]/;

  while (cursor < code.length) {
    let character = code.charAt(cursor);

    if (operators.includes(character)) {
      tokens.push({ type: TokenType.Operator, value: character });
    }

    if (number.test(character)) {
      let value = '';
      let decimal = false;

      while (number.test(character) || (character === "." && !decimal)) {
        if (character === ".") {
          decimal = true;
        }
        value += character;
        cursor ++;
        character = code.charAt(cursor);
      }

      tokens.push({ type: TokenType.Number, value: Number(value) });
    }

    cursor ++;
  }

  return tokens;
}

export default lex;