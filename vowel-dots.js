const vowels = new RegExp("[aeiou]", "g");

function vowelDots(str) {
    return str.replace(vowels, substring => `${substring}.`)
}