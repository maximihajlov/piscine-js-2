function defaultCurry(obj1) {
    return function (obj2) {
        return Object.fromEntries(Object.entries(obj1).concat(Object.entries(obj2)))
    }
}

function mapCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).map(func))
    }
}

function reduceCurry(func) {
    return function (obj, init) {
        return Object.entries(obj).reduce(func, init)
    }
}

function filterCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).filter(func))
    }
}

function reduceScore(personnel, init = 0) {
    return reduceCurry((acc, [, values]) =>
        values.isForceUser ? acc + values.pilotingScore + values.shootingScore : acc)(personnel, init)
}

function filterForce(personnel) {
    return filterCurry(([, values]) => values.isForceUser && values.shootingScore >= 80)(personnel)
}

function mapAverage(personnel) {
    return mapCurry(([name, values]) => {
        values.averageScore = (values.pilotingScore + values.shootingScore) / 2
        return [name, values]
    })(personnel)
}
