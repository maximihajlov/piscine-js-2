const vowels = new RegExp("[aeiouAEIOU]", "g");

function vowelDots(str) {
    return str.replace(vowels, substring => `${substring}.`)
}

console.log(vowelDots('Algorithm'), 'A.lgo.ri.thm')