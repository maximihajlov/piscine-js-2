function chunk(arr, len = 1) {
    let res = []
    for (let i = 0; i < arr.length; i += len) {
        res.push(arr.slice(i, i + len))
    }
    return res
}

let arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

console.log(chunk(arr, 100))