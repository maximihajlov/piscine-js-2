function flags(obj) {
    const res = {alias: {h: 'help'}, description: ''}
    Object.keys(obj).forEach(key => {
        if (!res.alias[key[0]]) {
            res.alias[key[0]] = key
        }
    })
    // show info about keys from help or all keys if help is undefined
    res.description = (obj.help ? obj.help : Object.keys(obj)).reduce((prev, key) => {
        return prev + `-${key[0]}, --${key}: ${obj[key]}\n`
    }, res.description).slice(0, -1)

    return res
}
