function deepCopy(obj) {
    if (typeof obj !== 'object' || Object.keys(obj).length === 0) return obj

    let copy = {}
    if (Array.isArray(obj)) copy = []

    for (const key in obj) {
        copy[key] = deepCopy(obj[key])

        if (Object.isFrozen(obj[key]))
            Object.freeze(copy[key])
    }
    return copy
}