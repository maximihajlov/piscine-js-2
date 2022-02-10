function countLeapYears(date) {
    const year = date.getFullYear()
    return Math.ceil(year / 4) - Math.ceil(year / 100) + Math.ceil(year / 400) - 1
}