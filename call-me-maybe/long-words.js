function longWords(arr) {
    return arr.every(str => str.length >= 5)
}

function oneLongWord(arr) {
    return arr.some(str => str.length >= 10)
}

function noLongWords(arr) {
    return !arr.some(str => str.length >= 7)
}
