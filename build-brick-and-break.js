export const build = function (num) {
    let block = document.createElement('div')
    block.id = `brick-${num}`
    if ((num + 1) % 3 === 0) block.setAttribute('foundation', 'true')
    document.body.append(block)

    if (num > 1) setTimeout(build, 100, num - 1)
}

export const repair = function () {
    let ids = Array.from(document.body.getAttribute('data-reparations').split(','))
    ids.forEach(id => {
        let el = document.getElementById(id)
        if (el.getAttribute('foundation') === 'true') el.setAttribute('repaired', 'in progress')
        else el.setAttribute('repaired', 'true')
    })
}

export const destroy = function () {
    let lastBlock = Array.from(document.body.getElementsByTagName('div'))[0]
    lastBlock.remove()
}