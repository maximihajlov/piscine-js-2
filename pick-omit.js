function pick(obj, str) {
    if (typeof str === 'string') str = [str]
    const res = {}
    str.forEach(key => {
        if (obj[key] !== undefined) res[key] = obj[key]
    })
    return res
}

function omit(obj, str) {
    if (typeof str === 'string') str = [str]
    str.forEach(key => {
        delete obj[key]
    })

    const res = {}
    Object.keys(obj).forEach(key => {
        res[key] = obj[key]
    })
    return res
}

