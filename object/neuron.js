function neuron(data) {
    let res = {}
    data.forEach(str => {
        let [words, response] = str.split(/Response:/)
        response = response.trim()
        words = words.split(/[:-]/)

        const type = words[0].toLowerCase()
        if (!res[type]) res[type] = {}

        // replace ' ' with '_' and remove all illegal symbols
        const el = words[1].trim().split(' ').join('_').split(/\W/).join('').toLowerCase()
        if (!res[type][el]) {
            res[type][el] = {}
            res[type][el][type.slice(0, -1)] = words[1].trim()
            res[type][el]['responses'] = []
        }
        res[type][el]['responses'].push(response)
    })
    return res
}
