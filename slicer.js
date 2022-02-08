function slice(thing, from = 0, to = thing.length) {
    if (from < 0) from += thing.length
    if (to < 0) to += thing.length

    if (typeof thing === "string") {
        let result = ""
        for (let i = from; i < to && i < thing.length; i++) {
            result += thing[i]
        }
        return result
    }
    if (Array.isArray(thing)) {
        let result = []
        for (let i = from; i < to && i < thing.length; i++) {
            result.push(thing[i])
        }
        return result
    }
}

