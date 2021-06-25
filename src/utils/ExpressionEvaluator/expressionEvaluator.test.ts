import { operations, splitExpressionByLogic, Token } from "./evaluator"


describe("ExpressionEvaluation", () => {
    it("splits expression into logical parts", () => {
        const expression = '2+2+3'
        const expressionParts = splitExpressionByLogic(expression)
        expect(expressionParts).toEqual(['2', '+2', '+3'])
    });

    it("creates valid token from string", () => {
        const stringToken = "+2"
        const token = new Token(stringToken)
        expect(token).toHaveProperty('operand', operations["+"])
        expect(token).toHaveProperty('value', 2)
    });

    it("creates valid token from string without operation character", () => {
        const stringToken = "2"
        const token = new Token(stringToken)
        expect(token).toHaveProperty('operand', operations[""])
        expect(token).toHaveProperty('value', 2)
    });

    it("evaluates two tokens", () => {
        const a = new Token('2')
        const b = new Token('+3')
        const result = Token.evaluateTokens(a, b)

        expect(result).toHaveProperty('operand', operations[""])
        expect(result).toHaveProperty('value', 5)
    })


});