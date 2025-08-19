function sum(x,y, ...z){
    // return x+y
    // return arguments[0] + arguments[1]
    let j=0;
    for(argu of arguments){
        j+=argu
    }
    console.log(j)
}
sum(1, 2, 3, 4, 5, 6)