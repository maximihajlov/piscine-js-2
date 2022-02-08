function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0, -2)
}

function cutFirstLast(str) {
    return str.slice(2, -2)
}

function keepFirst(str) {
    return str.slice(0, 2)
}

function keepLast(str) {
    return str.slice(-2)
}

function keepFirstLast(str) {
    return keepFirst(str) + keepLast(str)
}

