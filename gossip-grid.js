import {gossips} from "./gossip-grid.data.js";

let list = gossips

export const grid = () => {

    let width = document.createElement('input')
    let fontsize = document.createElement('input')
    let background = document.createElement('input')

    width.classList.add('range')
    fontsize.classList.add('range')
    background.classList.add('range')

    width.id = 'width'
    fontsize.id = 'fontSize'
    background.id = 'background'

    width.type = 'range'
    fontsize.type = 'range'
    background.type = 'range'

    width.min = '200'
    width.max = '800'

    fontsize.min = '20'
    fontsize.max = '40'

    background.min = '20'
    background.max = '75'

    let ranges = document.createElement('div')
    ranges.classList.add('ranges')

    ranges.append(width, fontsize, background)

    let form = document.createElement('form')
    form.classList.add('gossip')

    let button = document.createElement('button')
    button.innerHTML = 'Share gossip!'
    let textarea = document.createElement('textarea')
    textarea.placeholder = 'Got a gossip to share ?'

    button.addEventListener('click', e => {
        e.preventDefault()
        list.unshift(textarea.value)
        document.body.innerHTML = ''
        textarea.value = ''
        grid()
    })

    form.append(textarea, button)
    document.body.append(ranges, form)

    list.forEach(el => {
        let div = document.createElement('div')
        div.classList.add('gossip')
        div.innerHTML = el
        document.body.append(div)
    })

    width.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.width = `${e.target.value}px`
        })
    })
    fontsize.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.fontSize = `${e.target.value}px`
        })
    })
    background.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.background = `hsl(280, 50%, ${e.target.value}%)`
        })
    })
}

