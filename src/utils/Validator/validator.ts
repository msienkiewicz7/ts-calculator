export function validInput(currentInput: string, nextKey: string) : boolean {
    const lastKey = currentInput.slice(-1)

    //TODO: leading zeroes (eg. 00)

    //TODO: trailing operands or decimal points (e.g. 1+- or 1,,)
    if(!Number(lastKey) && !Number(nextKey)) {
        return false
    }

    

    //TODO: multiple decimal points (e.g. 1,0,)

    return true
}