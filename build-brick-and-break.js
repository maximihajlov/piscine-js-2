export const build = function (num) {
    let id = 1

    const createBlock = () => {
        let block = document.createElement('div')
        block.id = `brick-${id}`
        if ((id + 1) % 3 === 0) block.setAttribute('foundation', '')
        document.body.append(block)
        if (id === num) clearInterval(interval)
        id++
    }

    let interval = setInterval(createBlock, 100)

}

export const repair = function () {
    let ids = Array.from(document.body.getAttribute('data-reparations').split(','))
    ids.forEach(id => {
        let el = document.getElementById(id)
        if (el.hasAttribute('foundation')) el.setAttribute('repaired', 'in progress')
        else el.setAttribute('repaired', 'true')
    })
}

export const destroy = function () {
    let lastBlock = Array.from(document.body.getElementsByTagName('div'))[0]
    lastBlock.remove()
}