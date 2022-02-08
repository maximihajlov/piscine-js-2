function indexOf(arr, el, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === el) return i
    }
    return -1
}

function lastIndexOf(arr, el, index = 0) {
    let result = -1
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === el) result = i
    }
    return result
}

function includes(arr, el) {
    return indexOf(arr, el) !== -1;
}

