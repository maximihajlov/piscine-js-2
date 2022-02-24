function retry(count, callback) {
    return async (...args) => {
        while (true) {
            try {
                return await callback(...args)
            } catch (e) {
                if (count === 0) throw e
                count--
            }
        }
    }
}

function timeout(delay, callback) {
    return async (...args) => {
        let start = new Date()
        const result = await callback(...args)
        if (new Date() - start <= delay) return result
        throw new Error('timeout')
    }
}