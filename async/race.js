function race(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then(resolve).catch(reject)
        }
    })
}

function some(promises, N) {
    let results = []
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            promise.then((val) => {
                if (N-- === 0) resolve(results)
                else results.push(val)
            }).catch(reject)
        }
    })
}