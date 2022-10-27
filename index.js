function isPalindrome(word) {
 let letters = []
 let rword = ''

 for (let i=0; i<word.length; i++){
  letters.push(word[i])
  console.log('word iteration' , word[i])
  console.log('word array', letters)
 }
 for(let i=0; i<word.length; i++){
  rword += letters.pop()
  console.log('2 nd loop word array', letters)
  console.log('reversed word' , rword)
 }
 return word === rword
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
