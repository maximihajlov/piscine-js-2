export const pick = (e) => {
    if (!e) return
    let hue = e.x
    let lum = e.y
    hue = Math.round(hue / window.innerWidth * 360)
    lum = Math.round(lum / window.innerHeight * 100)
    let hsl = `hsl(${hue}, 50%, ${lum}%)`

    tHue.innerHTML = `hue\n${hue}`
    tLum.innerHTML = `${lum}\nluminocity`
    tHsl.innerHTML = hsl
    axisX.setAttribute('x1', e.x)
    axisX.setAttribute('x2', e.x)

    axisY.setAttribute('y1', e.y)
    axisY.setAttribute('y2', e.y)

    document.body.style.background = hsl
    return hsl
}

document.addEventListener('mousemove', pick)

document.addEventListener('mousedown', (e) => {
    navigator.clipboard.writeText(pick(e))
})


let tHsl, tHue, tLum

let axisX, axisY
document.addEventListener("DOMContentLoaded", function (event) {
    tHsl = document.createElement('div')
    tHue = document.createElement('div')
    tLum = document.createElement('div')
    tHsl.classList.add('text')
    tHue.classList.add('text')
    tLum.classList.add('text')

    axisX = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    axisY = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    axisX.id = 'axisX'
    axisY.id = 'axisY'

    axisX.setAttribute('y1', '-10000')
    axisX.setAttribute('y2', '10000')

    axisY.setAttribute('x1', '-10000')
    axisY.setAttribute('x2', '10000')

    tHsl.classList.add('hsl')
    tHue.classList.add('hue')
    tLum.classList.add('luminosity')

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.append(axisX, axisY)

    document.body.append(tHsl, tHue, tLum, svg)

    // puppeteer clipboard bug bypass
    let clipboardText = null;
    window.navigator.clipboard.readText = () => new Promise(resolve => resolve(clipboardText))
    window.navigator.clipboard.writeText = (text) => new Promise(() => clipboardText = text)

});