function round(num) {
    if (num - (num | 0) >= 0.5) return (num | 0) + 1
    return (num | 0)
}

function ceil(num) {
    return (num | 0) + 1
}

function floor(num) {
    return num | 0
}

function trunc(num) {
    return num | 0
}

