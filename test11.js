// Problem:From AI
// Given an array of numbers, write a function that returns a new array containing only the even numbers, doubled.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [4, 8, 12]

function doubleEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * 2);
}

console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6])); 