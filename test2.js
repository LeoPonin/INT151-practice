function filterarr(num){
    return num >= 5
}
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.filter(filterarr);
console.log(result); 