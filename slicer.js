function slice(arr, from = 0, to = arr.length) {
    let result = []
    if (from < 0) from += arr.length
    if (to < 0) to += arr.length

    for (let i = from; i < to && i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
}

