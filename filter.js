function filter(arr, func) {
    return arr.reduce((res, el, i) => {
        if (func(el, i, arr)) res.push(el)
        return res
    }, [])
}

function reject(arr, func) {
    return arr.reduce((res, el, i) => {
        if (!func(el, i, arr)) res.push(el)
        return res
    }, [])
}

function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)]
}