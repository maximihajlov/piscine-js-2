function bloodySunday(date) {
    const firstMondayEver = new Date('0001-01-01')
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayNum = (date.getTime() - firstMondayEver.getTime()) / (24 * 60 * 60 * 1000)

    return daysOfWeek[dayNum % 6]
}
