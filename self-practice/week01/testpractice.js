function longestWord(sentence) {
  let firstword = ""
  if (typeof sentence !== "string") {
    return '""'
  } else if (sentence === ""){
    return '""'
  } else {let words = sentence.split(" ");
     words.forEach(function(word) {
        if(word.length > firstword.length){
            firstword = word
        }
      });
      return firstword
  }
  
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))
console.log(longestWord(""))
console.log(longestWord(null))