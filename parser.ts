import { type Token, TokenType } from "./lexer";

type Binary = {
  type: 'Binary',
  operator: string,
  left: any,
  right: any
};

type Literal = {
  type: 'Literal',
  value: number
};

const parse = {
  cursor: 0,
  tokens: [] as Token[],
  expression: function(): Binary | Literal {
    let left: Binary | Literal = this.literal();
    let token = this.tokens[this.cursor];

    while (token && token.type === TokenType.Operator) {
      const operator = token.value;
      this.cursor++;
      const right = this.literal();
      left = { type: 'Binary', operator, left, right };
      token = this.tokens[this.cursor];
    }

    return left;
  },
  literal: function(): Literal {
    const token = this.tokens[this.cursor++];

    if (token && token.type === TokenType.Number) {
      return { type: 'Literal', value: token.value };
    }

    throw new Error(`Unexpected token: ${token.type}`);
  },
  $: function(tokens: Token[]): Binary | Literal {
    this.tokens = tokens;
    this.cursor = 0;
    return this.expression();
  }
};

export default parse.$.bind(parse);
