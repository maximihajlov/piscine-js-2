function adder(arr, sum = 0) {
    return arr.reduce((sum, el) => {
        return sum + el
    }, sum)
}

function sumOrMul(arr, res = 0) {
    return arr.reduce((res, el) => {
        if (el % 2 === 0) res *= el
        else res += el
        return res
    }, res)
}

function funcExec(arr, res = 0) {
    return arr.reduce((res, func) => {
        return func(res)
    }, res)
}
