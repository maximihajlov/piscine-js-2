function sign(num) {
    if (num > 0) return 1
    if (num < 0) return -1
    return 0
}

function sameSign(val1, val2) {
    return sign(val1) === sign(val2)
}