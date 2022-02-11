function triangle(str, depth) {
    let result = ''
    for (let i = 1; i < depth; i++) {
        result += str.repeat(i) + '\n'
    }
    return result+str.repeat(depth)
}
