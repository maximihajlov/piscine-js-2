function triangle(str, depth) {
    let result = ""
    for (let i = 0; i < depth; i++) {
        result += str.repeat(i) + "\n"
    }
    return result + str.repeat(depth)
}
