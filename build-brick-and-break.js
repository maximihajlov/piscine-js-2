export const build = function (num) {
    let id = 1

    const createBlock = () => {
        let block = document.createElement('div')
        block.id = `brick-${id}`
        if ((id + 1) % 3 === 0) {
            block.dataset.foundation = 'true'
        }
        document.body.append(block)
        if (id === num) clearInterval(interval)
        id++
    }

    let interval = setInterval(createBlock, 100)

}

export const repair = function () {
    let ids = Array.from(document.body.dataset.repatations.split(','))
    ids.forEach(id => {
        let el = document.getElementById(id)
        if (el.hasAttribute('data-foundation')) {
            el.dataset.repaired = 'in progress'
        } else el.dataset.repaired = 'true'
    })
}

export const destroy = function () {
    let lastBlock = Array.from(document.body.getElementsByTagName('div'))[0]
    lastBlock.remove()
}