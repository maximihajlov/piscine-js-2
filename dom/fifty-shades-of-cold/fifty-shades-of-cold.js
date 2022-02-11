import {colors} from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    let style = document.createElement('style')

    colors.forEach(col => {
        style.innerHTML += `.${col} {background: ${col}}`
    })

    document.head.append(style)
}

export const generateColdShades = () => {
    let good = colors.filter(col => {
        return col.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/)
    })
    good.forEach(col => {
        let div = document.createElement('div')
        div.classList.add(col)
        div.innerHTML = col
        document.body.append(div)
    })
}

export const choseShade = (color) => {
    Array.from(document.getElementsByTagName('div')).forEach(div => {
        div.classList = color
    })
}