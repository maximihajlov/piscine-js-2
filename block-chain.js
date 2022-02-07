const hashCode = str =>
    (
        [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36)

function blockChain(data, prev) {
    if (!prev) prev = {index: 0, hash: '0'}

    return {
        index: prev.index + 1,
        hash: hashCode((prev.index + 1).toString().concat(prev.hash, JSON.stringify(data))),
        data: data,
        prev: prev,
        chain: function (data) {
            return {
                index: this.index + 1,
                hash: hashCode((this.index + 1).toString().concat(this.hash, JSON.stringify(data))),
                data: data,
                prev: this,
                chain: this.chain,
            }
        }
    }
}
