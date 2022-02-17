function filterValues(nuts, func) {
    const res = {}
    Object.keys(nuts).forEach(key => {
        if (func(nuts[key])) res[key] = nuts[key]
    })
    return res
}

function mapValues(nuts, func) {
    const res = {}
    Object.keys(nuts).forEach(key => {
        res[key] = func(nuts[key])
    })
    return res
}

function reduceValues(nuts, func, res = 0) {
    return Object.keys(nuts).reduce((prev, val) => prev + nuts[val], res)
}
