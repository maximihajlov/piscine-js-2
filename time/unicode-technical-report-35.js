function format(date, fmt) {
    const y = Math.abs(date.getFullYear())
    const yyyy = date.toDateString().split(' ').pop().slice(-4)

    let G = 'AD'
    let GGGG = 'Anno Domini'
    if (date.getFullYear() < 0) {
        G = 'BC'
        GGGG = 'Before Christ'
    }

    const M = date.getMonth() + 1
    let MM = M
    if (M < 10) MM = '0' + M
    const MMM = date.toLocaleString('default', {month: 'short'})
    const MMMM = date.toLocaleString('default', {month: 'long'})

    const E = date.toLocaleString('default', {weekday: 'short'})
    const EEEE = date.toLocaleString('default', {weekday: 'long'})

    const d = date.getDate()
    let dd = d
    if (d < 10) dd = '0' + dd

    const H = date.getHours()
    let HH = H
    if (H < 10) HH = '0' + HH

    let h = H
    let a = 'AM'
    if (h >= 12) {
        a = 'PM'
        h -= 12
    }
    if (h === 0) h = 12
    let hh = h
    if (h < 10) hh = '0' + h

    const m = date.getMinutes()
    let mm = m
    if (m < 10) mm = '0' + mm

    const s = date.getSeconds()
    let ss = s
    if (s < 10) ss = '0' + ss

    fmt = fmt.replace('a', a)

    fmt = fmt.replace('hh', hh)
    fmt = fmt.replace('h', h)

    fmt = fmt.replace('ss', ss)
    fmt = fmt.replace('s', s)

    fmt = fmt.replace('mm', mm)
    fmt = fmt.replace('m', m)

    fmt = fmt.replace('HH', HH)
    fmt = fmt.replace('H', H)

    fmt = fmt.replace('dd', dd)
    fmt = fmt.replace('d', d)


    fmt = fmt.replace('yyyy', yyyy)
    fmt = fmt.replace('y', y)
    fmt = fmt.replace('GGGG', GGGG)
    fmt = fmt.replace('G', G)

    fmt = fmt.replace('EEEE', EEEE)
    fmt = fmt.replace('E', E)

    fmt = fmt.replace('MMMM', MMMM)
    fmt = fmt.replace('MMM', MMM)
    fmt = fmt.replace('MM', MM)
    fmt = fmt.replace(/(?<![AP])M(?!([ao]))/, M) // ignore May, Mon, AM, PM

    return fmt
}

let normalTime = new Date()
console.log(normalTime.toString())
