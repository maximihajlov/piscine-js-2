function ionOut(str) {
    const reg = new RegExp("\\w+t(?=ion)","g")
    return str.match(reg) || []
}
