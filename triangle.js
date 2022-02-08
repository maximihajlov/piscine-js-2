function triangle(str, depth) {
    let result = ""
    for (let i = 0; i <= depth; i++) {
        result += "\n" + str.repeat(i)
    }
    return result
}
