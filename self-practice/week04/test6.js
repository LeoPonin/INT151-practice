const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]

const total = cart.map(cart => (cart.price)*(cart.quantity)).reduce((newtotal,current)=> newtotal+current)
const objtotal ={total}
console.log(objtotal)