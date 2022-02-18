function filterKeys(nuts, func) {
    const res = {}
    Object.keys(nuts).forEach(key => {
        if (func(key)) res[key] = nuts[key]
    })
    return res
}

function mapKeys(nuts, func) {
    const res = {}
    Object.keys(nuts).forEach(key => {
        res[func(key)] = nuts[key]
    })
    return res
}

function reduceKeys(nuts, ...args) {
    return Object.keys(nuts).reduce(...args)
}