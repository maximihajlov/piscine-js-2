function round(num) {
    if (num > 0) {
        if (num - trunc(num) >= 0.5) return ceil(num)
        return floor(num)
    }
    if (trunc(num) - num >= 0.5) return floor(num)
    return ceil(num)
}

function ceil(num) {
    if (num > 0 && num !== trunc(num)) return trunc(num) + 1
    else return trunc(num)
}

function floor(num) {
    if (num > 0 || num === trunc(num)) return trunc(num)
    else return trunc(num) - 1
}

function trunc(num) {
    num = +num
    return (num - num % 1) || (!isFinite(num) || num === 0 ? num : num < 0 ? -0 : 0);
}

console.log(trunc(0xfffffffff))