function fold(arr, func, res = 0) {
    for (let i = 0; i < arr.length; i++) {
        res = func(res, arr[i], arr)
    }
    return res
}

function foldRight(arr, func, res = 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
        res = func(res, arr[i], arr)
    }
    return res
}

function reduce(arr, func) {
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = func(res, arr[i], arr)
    }
    return res
}

function reduceRight(arr, func) {
    let res = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        res = func(res, arr[i], arr)
    }
    return res
}


