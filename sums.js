function sums(num) {
    let part = []
    for (let i = 0; i < num; i++) {
        part.push(1)
    } // generating [1,1,1,...,1]

    let result = [part.slice()]

    while (part.length > 1) {
        let min = Math.min(...part.slice(0, -1))
        for (let i = 0; i < part.length - 1; i++) {
            if (part[i] === min) {
                part[i]++
                part[part.length - 1]--
                if (part[part.length - 1] === 0) part.pop()
                result.push(part.slice().reverse())
            }
        }
    }

    return result.slice(0, -1).sort() //last element is always [num]
}

const $7 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 3],
    [1, 1, 1, 2, 2],
    [1, 1, 1, 4],
    [1, 1, 2, 3],
    [1, 1, 5],
    [1, 2, 2, 2],
    [1, 2, 4],
    [1, 3, 3],
    [1, 6],
    [2, 2, 3],
    [2, 5],
    [3, 4],
]

console.log(sums(7))