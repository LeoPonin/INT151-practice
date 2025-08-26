const words = ['mango', 'apple','bananas', 'pineapple', 'mangosteen']
const word = words.map(words => words.toLowerCase()).filter(words => words.includes('mango'))
console.log(word)