/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(a, b) {

  let len1 = a.length;
  let len2 = b.length;
  if(len1 !== len2){
     console.log('Invalid Input');
     return
  }
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  if(str1 === str2){
     console.log("True");
  } else { 
     console.log("False");
  }
}
module.exports = isAnagram;
isAnagram("indian","ndiani")