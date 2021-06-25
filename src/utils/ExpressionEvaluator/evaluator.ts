
export function evaluate(expression: string) : string {
    const expressionParts = splitExpressionByLogic(expression)
    const tokens = expressionParts.map(token => new Token(token))
    console.log(tokens)
    while (tokens.length > 1) {
        //find index of highest prio operand
        const prioList = tokens.map(t => t.operand.prio)
        const i = prioList.indexOf(Math.max(...prioList));        
        // evaluate prev and highest token
        const newToken = Token.evaluateTokens(tokens[i-1], tokens[i])
        tokens.splice(i-1, 2, newToken)
    }
    console.log(tokens)
    return ''
}

export function splitExpressionByLogic(expression: string) : string[] {
    return expression.match(/[+\-*/]*(\.\d+|\d+(\.\d+)?)/g) || []  
}

type Operation = {
    key: string,
    prio: number,
    calculate: (a: number, b: number) => number
}

export const operations = {
    '+': {
        key: '+',
        prio: 1,
        calculate: function (a: number, b: number): number {
            return a + b
        }
    } as Operation,
    '*': {
        key: '*',
        prio: 2,
        calculate: function (a: number, b: number): number {
            return a * b
        }
    } as Operation,

}




export class Token {
    operand: Operation
    value: number
    constructor(s: string) {   
        const operandKey = s[0]
        let operand = operations["+"];
        let value = 0;
        if(operandKey === '*') {
            operand = operations["*"]
            value = Number(s.substring(1))
        } else if (operandKey === '/') {
            //TODO
        } else {
            value = Number(s)
        }
        this.operand = operand;
        this.value = value;

    }
    static evaluateTokens(a: Token, b: Token) : Token {
        const newValue = b.operand.calculate(a.value, b.value)
        return new Token(`${(newValue < 0 ? "" : "+") + newValue}`)
    }
}




  
  