function myfunc(theObject){
    theObject.model = "a9999"
}
const product = {model: "a101", price: 1999}
console.log(product.model)

myfunc(product);
console.log(product.model)