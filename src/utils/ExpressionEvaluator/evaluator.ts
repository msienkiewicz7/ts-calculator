
type Operation = {
    key: string,
    priority: number,
    calculate: (a: number, b: number) => number
}

export class ExpressionEvaluator {
    add: Operation = {
        key: "+",
        priority: 0,
        calculate: function (a: number, b: number): number {
            return a + b
        }
    }

    evaluate(expression: string) : string {
        // 1. Find the highest priority operand from the left

        // 2. Execute operation using adjacent numbers 
        
        return ""
    }

}