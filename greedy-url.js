function getURL(data) {
    let reg = /https?:\/\/\b([\w()@:%_\-\[\]+.,~#?&/=]+)/g
    return data.match(reg) || []
}

function greedyQuery(data) {
    let urls = getURL(data)
    let result = []
    for (const i in urls) {
        let params = new URLSearchParams(urls[i])
        if (Array.from(params).length > 2) result.push(urls[i])
    }
    return result
}

function notSoGreedy(data) {
    let urls = getURL(data)
    let result = []
    for (const i in urls) {
        let params = Array.from(new URLSearchParams(urls[i]))
        if (params.length === 2 || params.length === 3) result.push(urls[i])
    }
    return result
}