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

// Penjelasan:

// 1. Deklarasi Fungsi:
// function isPalindrome(str) { ... }
// Mendeklarasikan fungsi bernama isPalindrome yang menerima satu parameter str, yaitu string yang akan diperiksa apakah merupakan palindrom.

// 2. Membalikkan String:
// let reversed = '';
// Menginisialisasi variabel reversed sebagai string kosong.
// for (let i = str.length - 1; i >= 0; i--) { ... }
// Loop dimulai dari indeks terakhir string str dan berlanjut ke indeks pertama.
// reversed += str[i];
// Menambahkan karakter str[i] ke string reversed untuk membalikkan string.

// 3. Mengecek Palindrom:
// return str === reversed;
// Membandingkan string asli (str) dengan string yang dibalik (reversed). Jika keduanya sama, maka str adalah palindrom dan fungsi mengembalikan true; jika tidak, mengembalikan false.