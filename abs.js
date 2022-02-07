function isPositive(num) {
    return num > 0;
}

function abs(num) {
    if (isPositive(num) || num === 0) return num
    return -num
}