
export function evaluate(expression: string) : string {
    //TODO: implement evaluation
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
    } as Operation
}




export class Token {
    operand: Operation
    value: number
    constructor(s: string) {   
        const operandKey = s[0]
        let operand = operations["+"];
        let value = 0;
        if(operandKey === '*') {
            //TODO
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




  
  