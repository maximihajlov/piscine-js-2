function invert(obj) {
    const res = {}
    Object.keys(obj).forEach((key) => {
        res[obj[key]] = key
    })
    return res
}
