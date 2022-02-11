export const getArchitects = () => {
    let architects = Array.from(document.body.getElementsByTagName('a'))
    let others = Array.from(document.body.getElementsByTagName('span'))
    return [architects, others]
}

export const getClassical = () => {
    let architects = getArchitects()[0]
    let classical = architects.filter(el => el.classList.contains('classical'))
    let others = architects.filter(el => !classical.includes(el))

    return [classical, others]
}

export const getActive = () => {
    let classical = getClassical()[0]
    let active = classical.filter(el => el.classList.contains('active'))
    let others = classical.filter(el => !active.includes(el))

    return [active, others]
}


export const getBonannoPisano = () => {
    return [document.getElementById('BonannoPisano'), getActive()[0]]
}