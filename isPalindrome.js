// Buatlah sebuah fungsi bernama isPalindrome yang menerima sebuah string 
// dan mengembalikan true jika string tersebut adalah palindrom (dibaca sama dari depan dan belakang), dan false jika tidak.

function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("katak")); // Output: true
console.log(isPalindrome("hello")); // Output: false

