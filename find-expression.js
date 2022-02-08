const add4 = '+4'
const mul2 = '*2'

function findExpression(to) {
    for (let i = 0; ; i++) {
        let seq = convertToBinary(i)

        // max len = to / 4  - if +4+4...+4 = to
        // max len = log_2(to) - if *2*2...*2 = to
        // to / 4 > log_2(to) if to > 16, so max len can be set to 16/4 = 4

        if (seq.length > Math.max(to / 4, 4)) return undefined
        seq = seq.split('0').join(add4 + ' ')
        seq = seq.split('1').join(mul2 + ' ')
        seq = `1 ${seq}`.trimRight()

        if (count(seq) === to) return seq
    }
}

function convertToBinary(num) {
    if (num > 0) return convertToBinary(parseInt(String(num / 2))) + (num % 2)
    return ''
}

function count(exp) {
    return exp.slice(2)
        .split(' ')
        .reduce((total, op) => {
            if (op === '+4') return total + 4
            if (op === '*2') return total * 2
        }, 1)
}

