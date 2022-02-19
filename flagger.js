function flags(obj) {
    const res = {alias: {h: 'help'}, description: ''}
    Object.keys(obj).forEach(key => {
        if (!res.alias[key[0]]) {
            res.alias[key[0]] = key
        }
    })
    if (obj.help) {
        res.description = obj.help.reduce((prev, key) => {
            return prev + `-${key[0]}, --${key}: ${obj[key]}\n`
        }, res.description).slice(0, -1)
    } else {
        res.description = Object.keys(obj).reduce((prev, key) => {
            return prev + `-${key[0]}, --${key}: ${obj[key]}\n`
        }, res.description).slice(0, -1)
    }
    return res
}
