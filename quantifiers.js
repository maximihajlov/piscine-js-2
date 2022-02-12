function every(arr, func) {
    let ans = true
    for (let i = 0; i < arr.length; i++) {
        ans &&= func(arr[i], i, arr)
    }
    return ans
}

function some(arr, func) {
    let ans = false
    for (let i = 0; i < arr.length; i++) {
        ans ||= func(arr[i], i, arr)
    }
    return ans
}

function none(arr, func) {
    return !some(arr, func)
}
