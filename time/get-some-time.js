function firstDayWeek(week, year) {
    let firstMonday = new Date(year)
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

console.log(firstDayWeek(1, '1000'), '01-01-1000')

console.log(firstDayWeek(52, '1000'), '22-12-1000')

console.log(firstDayWeek(2, '0001'), '08-01-0001')

console.log(firstDayWeek(43, '1983'), '17-10-1983')

console.log(firstDayWeek(23, '0091'), '04-06-0091')