function get(src, path) {
    path = path.split('.')

    for (let i = 0, n = path.length; i < n; ++i) {
        let k = path[i]
        if (k in src) {
            src = src[k]
        } else {
            return undefined
        }
    }
    return src;
}

const src = {nested: {key: 'peekaboo'}}
const path = 'nested.key'
console.log(get(src, path)) // -> 'peekaboo'