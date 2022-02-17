function map(arr, func) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(func(arr[i], i, arr))
    }
    return results
}

function flatMap(arr, func) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        let res = func(arr[i], i, arr)
        if (Array.isArray(res)) res.forEach(el => {
            results.push(el)
        })
        else results.push(res)
    }
    return results
}


let arr1 = [1, 2, 3, 4];

let add2mult3 = (x) => {
    return [x + 2, [x * 3, x / 3]]
}

console.log(map(arr1, add2mult3))

console.log(flatMap(arr1, add2mult3))

