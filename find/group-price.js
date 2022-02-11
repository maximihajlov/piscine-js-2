function groupPrice(str) {
    let reg = /(USD|\$)[\d]{1,2}.[\d]{1,2}/g
    let prices = str.match(reg) || []
    for (const i in prices) {
        let num1 = prices[i].match(/(?<=(USD|\$))\d+(?=.)/g)
        let num2 = prices[i].match(/(?<=.)\d+$/g)
        prices[i] = [prices[i], num1[0], num2[0]]
    }
    return prices
}
