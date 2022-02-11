function dayOfTheYear(date) {
    const firstDayOfYear = new Date(date)
    firstDayOfYear.setDate(1)
    firstDayOfYear.setMonth(0)

    return 1 + (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)
}
