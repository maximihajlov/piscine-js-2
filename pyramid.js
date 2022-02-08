function pyramid(str, depth) {
    let result = ''
    for (let i = 1; i <= depth; i++) {
        result+=' '.repeat(depth-i)
        result += str.repeat(2 * i - 1)
        if (i !== depth) result += '\n'
    }
    return result
}

