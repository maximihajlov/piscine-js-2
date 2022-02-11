function arrToSet(arr) {
    return new Set(arr)
}

function arrToStr(arr) {
    return arr.join('')
}

function setToArr(set) {
    return [...set]
}

function setToStr(set) {
    return arrToStr(setToArr(set))
}

function strToArr(str) {
    return str.split('')
}

function strToSet(str) {
    return new Set(str)
}

function mapToObj(map) {
    let obj = {};
    for (let [key, value] of map) obj[key] = value;
    return obj
}

function objToArr(obj) {
    return Object.values(obj)
}

function objToMap(obj) {
    let map = new Map()
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
}

function arrToObj(arr) {
    let obj = {}
    arr.map((value, index) => {
        obj[index] = value
    })
    return obj
}

function strToObj(str) {
    return arrToObj(strToArr(str))
}

function superTypeOf(thing) {
    if (thing === null) {
        return 'null'
    }
    if (thing === undefined) {
        return 'undefined'
    }
    if (thing instanceof Map) {
        return 'Map'
    }
    if (thing instanceof Set) {
        return 'Set'
    }
    if (Array.isArray(thing)) {
        return 'Array'
    }
    const str = typeof thing
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
