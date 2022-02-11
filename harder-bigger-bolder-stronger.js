export const generateLetters = function () {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement('div')
        letter.innerHTML = getLetter()
        letter.style.fontSize = `${i + 11}px`

        if (i < 40) letter.style.fontWeight = '300'
        else if (i < 80) letter.style.fontWeight = '400'
        else letter.style.fontWeight = '600'

        document.body.append(letter)
    }
}

function getLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
