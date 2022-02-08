function findExpression(to) {
    for (let i = 0; ; i++) {
        let seq = convertToBinary(i)

        // max len = to / 4  - if +4+4...+4 = to
        // max len = log_2(to) - if *2*2...*2 = to
        // to / 4 > log_2(to) if to > 16, so max len can be set to 16/4 = 4

        if (seq.length > Math.max(to / 4, 4)) return undefined
        seq = seq.replaceAll('0', add4 + ' ').replaceAll('1', mul2 + ' ').trimRight() //trimRight removes space at the end
        if (eval(1 + seq) === to) return `1 ${seq}`
    }
}

function convertToBinary(num) {
    if (num > 0) return convertToBinary(parseInt(String(num / 2))) + (num % 2)
    return ''
}

