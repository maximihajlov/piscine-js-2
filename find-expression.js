function findExpression(to) {
    for (let i = 0; ; i++) {
        let seq = convertToBinary(i)

        // max len = to / 4  - if +4+4...+4 = to
        // max len = log_2(to) - if *2*2...*2 = to
        // to / 4 > log_2(to) if to > 16, so max len can be set to 16/4 = 4

        if (seq.length > Math.max(to / 4, 4)) return undefined

        seq = seq.split('0').join(add4 + ' ')
        seq = seq.split('1').join(mul2 + ' ')

        if (count(seq) === to) return `1 ${seq}`.trimRight()
    }
}

function convertToBinary(num) {
    if (num > 0) return convertToBinary(parseInt(String(num / 2))) + (num % 2)
    return ''
}

function count(exp) {
    let expArr = exp.split(' ')
    let num = 1
    for (const op in expArr) {
        if (expArr[op] === "*2") num *= 2
        if (expArr[op] === "+4") num += 4
    }
    return num
}
