function matchCron(pat, date) {
    pat = pat.split(' ')
    if (pat[0] !== '*' && date.getMinutes() !== Number(pat[0])) return false
    if (pat[1] !== '*' && date.getHours() !== Number(pat[1])) return false
    if (pat[2] !== '*' && date.getDate() !== Number(pat[2])) return false
    if (pat[3] !== '*' && date.getMonth() !== Number(pat[3]) - 1) return false

    if (Number(pat[4]) === 7) pat[4] = 0
    if (pat[4] !== '*' && date.getDay() !== Number(pat[4])) return false

    return true
}
