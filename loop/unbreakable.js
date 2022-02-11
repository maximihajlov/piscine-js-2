function split(str, sep) {
    let words = [str]
    if (sep === "") return Array.from(str)
    if (sep === undefined) return [str]

    str += sep
    while (true) {
        let index = str.indexOf(sep)
        if (index === -1) break

        words.push(str.slice(0, index))
        str = str.slice(index + sep.length)
    }

    if (words.length > 1) words.shift()

    return words
}

function join(arr, sep = ',') {
    let res = ""
    for (const index in arr) {
        res += arr[index]
        if (index < arr.length - 1) {
            res += sep
        }
    }
    return res
}