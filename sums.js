function sums(num) {
    function get(n, limit) {
        if (limit > n) return get(n, n)
        if (limit > 0) return get(n, limit - 1) + get(n - limit, limit)
        if (n === 0 && limit === 0) return 1
    }

    return get(num, num)
}

console.log(sums(4))