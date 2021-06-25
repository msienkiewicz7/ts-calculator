import { splitExpressionByLogic } from "./evaluator"


describe("ExpressionEvaluation", () => {
    it("splits expression into logical parts", () => {
        const expression = '2+2+3'
        const expressionParts = splitExpressionByLogic(expression)
        expect(expressionParts).toEqual(['2', '+2', '+3'])
    });
});