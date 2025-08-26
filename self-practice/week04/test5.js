const product = [1, 'RED, 102']
const productDetail = product.reduce((detail, prop) =>{
    return prop === "RED" ? detail?.concat("R") : detail?.concat(prop)
}, '')