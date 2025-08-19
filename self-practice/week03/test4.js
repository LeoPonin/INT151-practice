function dosomething (){
    return goodbye
}
function goodbye (){
    return "good bye"
}

let doit = dosomething()
console.log(doit())
console.log(dosomething()())