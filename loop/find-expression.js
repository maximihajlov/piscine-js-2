// const add4 = '+4'
// const mul2 = '*2'

function findExpression(to) {
    let res = []

    function can(to) {
        if (to <= 0) return false
        if (to === 1) return true
        if (can(to / 2)) {
            res.push(mul2)
            return true
        }
        if (can(to - 4)) {
            res.push(add4)
            return true
        }
        return false
    }

    if (can(to)) return `1 ${res.join(' ')}`
}



