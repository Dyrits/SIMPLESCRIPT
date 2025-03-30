import { TokenType } from "./lexer";
const parse = {
    cursor: 0,
    tokens: [],
    expression: function () {
        let left = this.literal();
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
    literal: function () {
        const token = this.tokens[this.cursor++];
        if (token && token.type === TokenType.Number) {
            return { type: 'Literal', value: token.value };
        }
        throw new Error(`Unexpected token: ${token.type}`);
    },
    $: function (tokens) {
        this.tokens = tokens;
        this.cursor = 0;
        return this.expression();
    }
};
export default parse.$.bind(parse);
