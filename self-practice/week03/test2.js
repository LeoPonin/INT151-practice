function multi1 (a,b){
    a*b
}
console.log(multi1(3,5))
// -----------------
// arrow function
const multi = (a,b) => a*b
console.log(multi(3,5))
// ------------------------
// function expression using (function declaration)
const multiply2 = function(a,b){return a*b}
console.log(multiply2(5,9))
const x = multi
console.log(x(4,6))
console.log(multi===x)

