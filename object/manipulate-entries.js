function filterEntries(groceries, ...args) {
    return Object.fromEntries(Object.entries(groceries).filter(...args))
}

function mapEntries(groceries, ...args) {
    return Object.fromEntries(Object.entries(groceries).map(...args))
}

function reduceEntries(groceries, ...args) {
    return Object.entries(groceries).reduce(...args)
}

function totalCalories(groceries) {
    return Number(Object.entries(groceries).reduce((previousValue, currentValue) =>
        previousValue + nutritionDB[currentValue[0]]['calories'] * currentValue[1] / 100, 0).toFixed(1))
}

function lowCarbs(groceries) {
    return filterEntries(groceries, ([name, val]) => nutritionDB[name]['carbs'] * val / 100 < 50)
}

function cartTotal(groceries) {
    return mapEntries(groceries, ([name, val]) => {
        return [name, mapEntries(nutritionDB[name], ([name, nut]) => [name, Number((nut * val / 100).toFixed(3))])]
    })
}