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
        return `${Math.round((Number(el.slice(0, -2)) - 32) * (5 / 9))}°C`
    })
}

function tempForecasts(arr) {
    return arr.map(el => {
        let temp = `${Math.floor((Number(el['temperature'].slice(0, -2)) - 32) * (5 / 9))}°Celsius`
        let state = el['state'].split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
        return `${temp} in ${el.city}, ${state}`
    })
}