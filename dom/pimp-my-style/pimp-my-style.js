const stylesBackup = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
].reverse()

let styles = stylesBackup.slice()

export const pimp = () => {
    let button = document.getElementsByClassName('button')[0]
    if (button.classList.contains('unpimp')) {
        let lastClass = button.classList[button.classList.length - 2]
        button.classList.remove(lastClass)
        if (lastClass === 'one') {
            button.classList.remove('unpimp')
            styles = stylesBackup.slice()
        }

    } else {
        let nextClass = styles.pop()
        if (nextClass) {
            button.classList.add(nextClass)
            if (nextClass === 'fifteen') button.classList.add('unpimp')
        }
    }
}