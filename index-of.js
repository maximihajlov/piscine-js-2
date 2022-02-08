function indexOf(arr, el, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === el) return i
    }
    if (index !== 0) return indexOf(arr, el)
    return -1
}

function lastIndexOf(arr, el, index = 0) {
    let result = -1
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === el) result = i
    }
    if (result !== -1) return result
    if (index !== 0) return lastIndexOf(arr, el)
    return -1
}

function includes(arr, el) {
    return indexOf(arr, el) !== -1;
}