// const is = {}
is.num = function (value) {
    return (typeof value === "number")
}
is.nan = function (value){
    return (typeof value !== "number") && isNaN(value)
}