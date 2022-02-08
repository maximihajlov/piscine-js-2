function multiply(a, b) {
    return eval(a + String.fromCharCode(42) + b)
}

function divide(a, b) {
    return Math.floor(eval(a + String.fromCharCode(47) + b))
}

function modulo(a, b) {
    return eval(a + String.fromCharCode(37) + b)
}
