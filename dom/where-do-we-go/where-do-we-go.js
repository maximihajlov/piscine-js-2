import {places} from "./where-do-we-go.data.js";


let location, sorted, compass
export const explore = () => {
    sorted = Array.from(places)
    sorted.sort((place1, place2) => {
        let coords1 = place1.coordinates.split(' ')[0]
        let coords2 = place2.coordinates.split(' ')[0]

        let type1 = coords1.match(/(?<=")\w*$/g)[0]
        let degs1 = Number(coords1.match(/^\w*(?=°)/g)[0])
        let mins1 = Number(coords1.match(/(?<=°)\w*(?=')/g)[0])
        let secs1 = Number(coords1.match(/(?<=').*(?=")/g)[0])

        let type2 = coords2.match(/(?<=")\w*$/g)[0]
        let degs2 = Number(coords2.match(/^\w*(?=°)/g)[0])
        let mins2 = Number(coords2.match(/(?<=°)\w*(?=')/g)[0])
        let secs2 = Number(coords2.match(/(?<=').*(?=")/g)[0])

        if (type1 === 'S') {
            degs1 *= -1
            mins1 *= -1
            secs1 *= -1
        }
        if (type2 === 'S') {
            degs2 *= -1
            mins2 *= -1
            secs2 *= -1
        }

        if (type1 !== type2) {
            return type1.charCodeAt(0) - type2.charCodeAt(0)
        }
        if (degs1 !== degs2) return degs2 - degs1
        if (mins1 !== mins2) return mins2 - mins1
        return secs2 - secs1
    })
    sorted.forEach((place) => {
        let section = document.createElement('section')
        let img = place.name.split(',')[0].toLowerCase()
        img = img.split(' ').join('-')
        section.style.background = `url('./where-do-we-go_images/${img}.jpg')`
        section.style.backgroundSize = '100% 100%'
        document.body.append(section)
    })

    location = document.createElement('a')
    location.classList.add('location')
    location.target = '_blank'

    compass = document.createElement('div')
    compass.classList.add('direction')

    document.body.append(location, compass)

    scroll()

    console.log(sorted)
}

let lastLocation = -1
const scroll = (e) => {
    if (window.scrollY > lastLocation) compass.innerHTML = 'S'
    else compass.innerHTML = 'N'
    lastLocation = window.scrollY

    let displayLocation = sorted[Math.round(window.scrollY / window.innerHeight)]
    location.innerHTML = `${displayLocation.name}\n${displayLocation.coordinates}`
    location.style.color = displayLocation.color
    location.href = `https://www.google.com/maps/place/${displayLocation.coordinates}`
}

document.addEventListener('scroll', scroll)