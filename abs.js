function isPositive(num) {
    return num > 0;
}

function abs(num) {
    if (isPositive(num)) return num
    return -num
}