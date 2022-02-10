function firstDayWeek(week, year) {
    let firstDayOfYear = new Date(year)
    if (week === 1) return formatDate(firstDayOfYear)

    let firstMonday = firstDayOfYear

    while (firstMonday.getDay() !== 1) { // 1 is Monday
        firstMonday.setDate(firstMonday.getDate() + 1)
    }

    if (firstMonday.getDate() !== 1) week--

    const r = new Date(firstMonday.getTime() + ((week - 1) * 7 * 24 * 60 * 60 * 1000))
    return formatDate(r)
}

function formatDate(d) {
    return d.toISOString().slice(0, 10).split('-').reverse().join('-')
}
