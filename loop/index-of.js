function indexOf(arr, el, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === el) return i
    }
    return -1
}

function lastIndexOf(arr, el, index = arr.length - 1) {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === el) return i
    }
    return -1
}

function includes(arr, el) {
    return indexOf(arr, el) !== -1;
}