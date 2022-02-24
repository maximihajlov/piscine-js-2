function throttle(func, wait) {
    let isThrottled, savedArgs, savedThis

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments
            savedThis = this
            return
        }

        isThrottled = true
        func.apply(this, arguments)

        setTimeout(function () {
            isThrottled = false
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, wait)
    }

    return wrapper

}

function opThrottle(func, wait, options = {leading: true, trailing: true}) {
    let timer, savedArgs, savedThis

    return function () {
        if (timer) {
            savedThis = this
            savedArgs = arguments
            return
        }

        const timeup = () => {
            if (options.trailing === true && savedArgs) {
                func.apply(savedThis, savedArgs)
                savedThis = savedArgs = null
                timer = setTimeout(timeup, wait)
            } else {
                timer = null
            }
        }

        if (options.leading === true) {
            func.apply(this, arguments)
        } else {
            savedThis = this
            savedArgs = arguments
        }
        timer = setTimeout(timeup, wait)
    }
}

