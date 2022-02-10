function isValid(date) {
    date = new Date(date)
    if (Object.prototype.toString.call(date) !== "[object Date]") return false
    return !isNaN(date);
}

function isAfter(date1, date2) {
    date1 = new Date(date1)
    date2 = new Date(date2)
    if (!isValid(date1) || !isValid(date2)) return false
    return date1.getTime() > date2.getTime()
}

function isBefore(date1, date2) {
    date1 = new Date(date1)
    date2 = new Date(date2)
    if (!isValid(date1) || !isValid(date2)) return false
    return date1.getTime() < date2.getTime()
}

function isFuture(date) {
    date = new Date(date)
    if (!isValid(date)) return false
    return date.getTime() > Date.now()
}

function isPast(date) {
    date = new Date(date)
    if (!isValid(date)) return false
    return date.getTime() < Date.now()
}