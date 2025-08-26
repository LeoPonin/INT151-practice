const words = ['mango','apple','mangosteen','orange']
const casesen = words.map(words => words.toLowerCase())
if(casesen.find(x => x === 'apple')){
    console.log(`has apple`)
}
else{console.log("does not have apple")
 
}
console.log(casesen)
 
 