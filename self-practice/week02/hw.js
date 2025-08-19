function shallowEquality(object1, object2) {
    const keys1 =Object.keys(object1)
    const keys2 =Object.keys(object2)
    if(keys1.length !== keys2.length) {
        return false
    }
    for(let key of keys1){
        if(object1[key] !== object2[key]){
            console.log(`key ${object1[key]}`)
            return false
        }
    }
    return true
}

let book1 = {
    isbn: 123459, title: "JS"
}

let book2 = {
    isbn: 123456, title: "JS"
}

console.log("shallowequality:"+shallowEquality(book1,book2))


