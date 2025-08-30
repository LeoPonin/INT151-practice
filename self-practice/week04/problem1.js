// AI problem|| Write a function capitalizeAll(arr) that takes an array of strings and returns a new array with all strings capitalized (first letter uppercase, rest lowercase).

function capitalizeAll(arr) {
    return arr.map(str => {
        if (typeof str !== 'string' || str.length === 0) return str
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    })
}


console.log(capitalizeAll(['hello', 'WORLD', 'jAvAsCrIpT'])); // ['Hello', 'World', 'Javascript']
