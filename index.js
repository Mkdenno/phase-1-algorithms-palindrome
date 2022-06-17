function isPalindrome(word) {
  // Write your algorithm here
  //function isPalindrome should return true if it reads same forward and backward
  //it should return false if it does not read same forward and backward
  //should only be lowercase
  let reverseWord=word.split("").reverse().join("")
  if(word==reverseWord){
    return true;
  }
  else{
    return false;
  }

}
console.log(isPalindrome("mom"))

/* 
  Add your pseudocode here
  declare a fuction Palindrome

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
