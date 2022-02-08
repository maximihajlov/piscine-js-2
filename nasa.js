function nasa(N) {
    let res = ""
    for (let i = 0; i <= N; i++) {
        res += i
        if (i % 3 === 0) res += "NA"
        if (i % 5 === 0) res += "SA"
        res += " "
    }
    return res
}