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
    fontsize.id = 'fontsize'
    background.id = 'background'

    width.type = 'range'
    fontsize.type = 'range'
    background.type = 'range'

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

    width.addEventListener('change',(e)=>{
        console.log(e2)
        // Array.from(document.getElementsByClassName('gossip')).forEach(el => {
        //     el.style.width =
        // })
    })

}

