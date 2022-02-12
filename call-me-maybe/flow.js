function flow(funcs) {
    return function (...args) {
        let result = Array.from(args)
        funcs.forEach((func) => {
            if (Array.isArray(result)) result = func(...result)
            else result = func(result)
        })
        return result
    }
}