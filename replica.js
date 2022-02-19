function replica(...objects) {
    let res = {}
    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === "object" && typeof res[key] === "object" &&
                !Array.isArray(obj[key]) && !Array.isArray(res[key])) {
                res[key] = {...res[key], ...obj[key]}
            } else res[key] = obj[key]
        })
    })
    return res
}
