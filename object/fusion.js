function fusion(a, b) {
    const res = {}
    Object.keys(a).forEach(key => {
        res[key] = a[key]
    })

    Object.keys(b).forEach(key => {
        if (typeof res[key] !== typeof b[key]) res[key] = b[key]
        else if (Array.isArray(res[key]) && Array.isArray(b[key]))
            res[key] = res[key].concat(b[key])
        else if (typeof res[key] === 'string') res[key] += ' ' + b[key]
        else if (typeof res[key] === 'number') res[key] += b[key]
        else if (typeof res[key] === 'object') res[key] = fusion(res[key], b[key]);
    })
    return res
}

