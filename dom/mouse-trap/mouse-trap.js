let lastCircle
export const createCircle = (e) => {
    if (!e) return
    isBoxed = false

    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.top = `${e.y - 25}px`
    div.style.left = `${e.x - 25}px`

    div.style.background = 'white'
    div.classList.add('circle')
    lastCircle = div

    document.body.append(div)
    moveCircle(e)
}

let isBoxed = false
export const moveCircle = (e) => {
    if (lastCircle) {
        if (!isBoxed && box.left < e.x && e.x < box.right && box.top < e.y && e.y < box.bottom) {
            isBoxed = true
            lastCircle.style.background = `var(--purple)`
        }
        let x = e.x
        let y = e.y

        if (isBoxed) {
            if (y < box.top) y = box.top
            else if (y > box.bottom) y = box.bottom
            if (x < box.left) x = box.left
            else if (x > box.right) x = box.right
        }

        lastCircle.style.top = `${y - 25}px`
        lastCircle.style.left = `${x - 25}px`
    }
}


let box
export const setBox = () => {
    box = document.createElement('div')
    box.classList.add('box')
    box.style.position = 'relative'
    box.style.margin = 'auto'

    box.style.height = `300px`
    box.style.width = '500px'

    document.body.append(box)

    box.top = box.getBoundingClientRect().top + 25
    box.left = box.getBoundingClientRect().left + 25
    box.right = box.getBoundingClientRect().right - 25
    box.bottom = box.getBoundingClientRect().bottom - 25
}

document.addEventListener('mousemove', moveCircle)
document.addEventListener('mousedown', createCircle)
