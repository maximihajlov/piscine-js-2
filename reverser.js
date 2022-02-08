function reverse(thing) {
    if (typeof thing === "string") {
        let result = ""
        for (let i = thing.length - 1; i >= 0; i--) {
            result += thing[i]
        }
        return result
    }
    if (Array.isArray(thing)) {
        let result = []
        for (let i = thing.length - 1; i >= 0; i--) {
            result.push(thing[i])
        }
        return result
    }
}