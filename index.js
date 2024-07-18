function isPalindrome(word) {
  // Write your algorithm here
    // Reverse the word
  const reversedWord = word.split('').reverse().join('');
  // Check if the word is the same as the reversed word
  return word === reversedWord;
}

/* 
  Add your pseudocode here
1. Define a function `isPalindrome` that takes a string `word` as input.
2. Reverse the string.
3. Compare the reversed string with the original string.
4. Return `true` if they are the same, and `false` otherwise.
*/


/*
  Add written explanation of your solution here
  The function checks if a given word is a palindrome by comparing the original word with its reversed version.
  If the original and reversed words are the same, the function returns true, indicating that the word is a palindrome.
  Otherwise, it returns false.

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
