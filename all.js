function all(object) {
    return new Promise(async (resolve, reject) => {
        let result = {}
        for (const key in object) {
            try {
                result[key] = await object[key]
            } catch (e) {
                reject(e)
            }
        }
        resolve(result)
    })
}