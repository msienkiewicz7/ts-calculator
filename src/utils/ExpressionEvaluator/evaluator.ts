
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
    } as Operation,
    '': {
        key: '',
        prio: 0,
        calculate: function (a: number, b: number): number {
            return a
        }
    } as Operation
}

export function getOperandByKey(key: string) : Operation {
    switch (key) {
        case '+':
            return operations["+"]
    
        default:
            return operations[""]
    }
}



export class Token {
    operand: Operation
    value: number
    constructor(s: string) {   
        const operandKey = s[0]
        const operand: Operation = getOperandByKey(operandKey)
        this.operand = operand;
        this.value = operand.key === '' ?  Number(s) : Number(s.substring(1));
    }
}




  
  