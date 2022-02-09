function sameAmount(str, reg1, reg2) {
    reg1 = new RegExp(reg1.source, reg1.flags + "g")
    reg2 = new RegExp(reg2.source, reg2.flags + "g")
    return (str.match(reg1) || []).length === (str.match(reg2) || []).length
}