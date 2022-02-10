function isFriday(date) {
    return date.getDay() === 5
}

function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6
}

function isLeapYear(date) {
    return date.getFullYear() % 4 === 0
}

function isLastDayOfMonth(date) {
    let nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000)
    return date.getMonth() !== nextDay.getMonth()
}