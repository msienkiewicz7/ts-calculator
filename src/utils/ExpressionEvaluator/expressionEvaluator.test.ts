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

    
});