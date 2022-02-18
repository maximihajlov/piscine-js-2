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

const ctx = {
    groceriesCart1: {oil: 500, onion: 230, garlic: 220, paprika: 480},
    groceriesCart2: {tomato: 700, vinegar: 120, orange: 450},
    total1: {
        oil: {
            calories: 240,
            protein: 0,
            carbs: 0,
            sugar: 615,
            fiber: 0,
            fat: 755,
        },
        onion: {
            calories: 0,
            protein: 2.3,
            carbs: 20.7,
            sugar: 0,
            fiber: 0,
            fat: 0,
        },
        garlic: {
            calories: 327.8,
            protein: 14.08,
            carbs: 72.6,
            sugar: 2.2,
            fiber: 4.62,
            fat: 1.1,
        },
        paprika: {
            calories: 1353.6,
            protein: 67.872,
            carbs: 259.152,
            sugar: 4.8,
            fiber: 0,
            fat: 61.872,
        },
    },
    total2: {
        orange: {
            calories: 220.5,
            carbs: 58.5,
            fat: 0.45,
            fiber: 0.9,
            protein: 4.05,
            sugar: 40.5,
        },
        tomato: {
            calories: 126,
            carbs: 27.3,
            fat: 1.4,
            fiber: 8.4,
            protein: 6.3,
            sugar: 18.2,
        },
        vinegar: {
            calories: 24,
            carbs: 0.72,
            fat: 0,
            fiber: 0,
            protein: 0.048,
            sugar: 0.48,
        },
    },
}

console.log(cartTotal(ctx.groceriesCart1), ctx.total1)