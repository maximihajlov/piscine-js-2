function interpolation(object) {
    let stepNum = 0
    let interval = setInterval(() => {

        let d = object.start + stepNum * (object.end - object.start) / object.step
        let t = (stepNum + 1) * object.duration / object.step
        object.callback([d, t])

        stepNum++
        if (stepNum === object.step) clearInterval(interval)
    }, object.duration / object.step)
}
