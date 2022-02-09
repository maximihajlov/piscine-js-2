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
                result.push(part.slice())
            }
        }
    }

    return result.slice(0, -1) //last element is always [num]
}

console.log(sums(3))