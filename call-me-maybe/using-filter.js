function filterShortStateName(arr) {
    return arr.filter(str => {
        return str.length < 7
    })
}

function filterStartVowel(arr) {
    return arr.filter(str => {
        return str.match(/^[aeiou]/i)
    })
}

function filter5Vowels(arr) {
    return arr.filter(str => {
        return filterStartVowel(str.split('')).length >= 5
    })
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        let vowels = filterStartVowel(str.toLowerCase().split(''))
        vowels.sort()
        return vowels[0] === vowels[vowels.length - 1]
    })
}

function multiFilter(arr) {
    return arr.filter(obj => {
        if (obj['capital'].length < 8) return false
        if (filterStartVowel([obj.name]).length > 0) return false
        if (!obj.tag.match(/[aeiou]/i)) return false
        if (obj.region === 'South') return false

        return true
    })
}
