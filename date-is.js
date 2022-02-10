function isValid(date) {
    if (!(Object.prototype.toString.call(date) === "[object Date]" || Object.prototype.toString.call(date) === "[object Number]")) return false
    return !isNaN(date);
}

function isAfter(date1, date2) {
    return date1 > date2
}

function isBefore(date1, date2) {
    return date1 < date2
}

function isFuture(date) {
    return date > Date.now()
}

function isPast(date) {
    return date < Date.now()
}
