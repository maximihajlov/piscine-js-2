function citiesOnly(arr) {
    return arr.map(el => el.city)
}

function upperCasingStates(arr) {
    return arr.map(state => {
        return state.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
    })
}

function fahrenheitToCelsius(arr) {
    return arr.map(el => {
        return `${Math.floor((Number(el.slice(0, -2)) - 32) * (5 / 9))}°C`
    })
}

function trimTemp(arr) {
    return arr.map(el => {
        el['temperature'] = el['temperature'].trim()
        return el
    })
}

function tempForecasts(arr) {
    arr = trimTemp(arr)
    return arr.map(el => {
        let temp = `${Math.floor((Number(el['temperature'].slice(0, -2)) - 32) * (5 / 9))}°Celsius`
        let state = el['state'].split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
        return `${temp} in ${el.city}, ${state}`
    })
}

console.log(trimTemp([
    {city: 'Los Angeles', temperature: '  101 °F   '},
    {city: 'San Francisco', temperature: ' 84 ° F   '},
]))