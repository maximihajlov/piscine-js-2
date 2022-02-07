function first(arg) {
    return arg[0]
}

function last(arg) {
    return arg[arg.length - 1]
}

function kiss(arg) {
    return [last(arg), first(arg)]
}