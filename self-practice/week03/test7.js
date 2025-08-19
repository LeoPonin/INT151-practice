function greeting(greet = "hello", whom = "guest", quote = "How are you"){
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi"))
console.log(greeting("good","guy"))
console.log(greeting("good",null))