function nasa(N) {
    let res = ""
    for (let i = 1; i <= N; i++) {
        if (i % 3 !== 0 && i % 5 !== 5) res += i
        else {
            if (i % 3 === 0) res += "NA"
            if (i % 5 === 0) res += "SA"
        }
        res += " "
    }
    return res
}