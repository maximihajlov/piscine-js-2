function RNA(dna) {
    let ans = ""
    for (const i in dna) {
        let tmp = ""
        switch (dna[i]) {
            case "G":
                tmp = "C"
                break
            case "C":
                tmp = "G"
                break
            case "T":
                tmp = "A"
                break
            case "A":
                tmp = "U"
                break
            default:
                tmp = dna[i]
        }
        ans += tmp
    }
    return ans
}

function DNA(rna) {
    let ans = ""
    for (const i in rna) {
        let tmp = ""
        switch (rna[i]) {
            case "C":
                tmp = "G"
                break
            case "G":
                tmp = "C"
                break
            case "A":
                tmp = "T"
                break
            case "U":
                tmp = "A"
                break
            default:
                tmp = rna[i]
        }
        ans += tmp
    }
    return ans
}
