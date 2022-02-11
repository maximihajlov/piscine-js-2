function multiply(a, b) {
    return eval(a + String.fromCharCode(42) + b)
}

function divide(a, b) {
    let res = eval(a + String.fromCharCode(47) + b)
    if (res > 0) return Math.floor(res)
    return Math.ceil(res)
}

function modulo(a, b) {
    return eval(a + String.fromCharCode(37) + b)
}
