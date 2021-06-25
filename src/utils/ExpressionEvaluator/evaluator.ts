
export function evaluate(expression: string) : string {
    //TODO: implement evaluation
    return ''
}

export function splitExpressionByLogic(expression: string) : string[] {
    return expression.match(/[+\-*/]*(\.\d+|\d+(\.\d+)?)/g) || []  
}



  
  