function sums(num) {

    let part = genOnes(num)
    let result = [part.slice()]

    while (part.length > 1) {
        let min = Math.min(...part.slice(0, -1))
        for (let i = 0; i < part.length - 1; i++) {
            if (part[i] === min) {
                part[i]++
                part[part.length - 1]--
                const sum = part.slice(i + 1).reduce((s, a) => s + a, 0);
                part = part.slice(0, i + 1).concat(genOnes(sum))

                result.push(part.slice().reverse())
            }
        }
    }

    return result.slice(0, -1).sort() //last element is always [num]
}

function genOnes(num) {
    // generating [1,1,1,...,1]
    let ones = []
    for (let i = 0; i < num; i++) {
        ones.push(1)
    }
    return ones
}
