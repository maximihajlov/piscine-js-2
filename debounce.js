function debounce(func, wait) {
    let timer;
    return function () {
        const fnCall = () => func.apply(this, arguments)
        clearTimeout(timer)
        timer = setTimeout(fnCall, wait)
    }
}

function opDebounce(func, wait, immediate) {
    let timer;
    return function () {
        const fnCall = () => {
            timer = null;
            if (!immediate) func.apply(this, arguments)
        }

        if (immediate && !timer) func.apply(this, arguments)

        clearTimeout(timer);
        timer = setTimeout(fnCall, wait)
    }
}