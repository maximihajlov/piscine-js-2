function isWinner(country) {
    return new Promise(async function (resolve, reject) {
        country = await db.getWinner(country).catch(() => {
            resolve(country + ' never was a winner')
        })
        if (country.continent !== 'Europe') resolve(country.name + ' is not what we are looking for because of the continent')
        let results = await db.getResults(country.id)
        if (results.length < 3) resolve(country.name + ' is not what we are looking for because of the number of times it was champion')

        let years = results.reduce((prev, res) => prev + ', ' + res.year, '').slice(2)
        let scores = results.reduce((prev, res) => prev + ', ' + res.score, '').slice(2)
        resolve(country.name + ' won the FIFA World Cup in ' + years
            + ' winning by ' + scores)
    })
}