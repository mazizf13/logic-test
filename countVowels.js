// Buatlah sebuah fungsi bernama countVowels yang menerima sebuah string 
// dan mengembalikan jumlah huruf vokal dalam string tersebut.

function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello world")); // Output: 3

// Penjelasan
// 1. Deklarasi Fungsi:
// function countVowels(str) { ... }
// Mendeklarasikan fungsi bernama countVowels yang menerima satu parameter str, yaitu string yang akan dihitung jumlah huruf vokalnya.

// 2. Inisialisasi Vokal dan Counter:
// let vowels = 'aeiouAEIOU';
// Mendeklarasikan string berisi huruf vokal kecil dan besar.
// let count = 0;
// Menginisialisasi variabel count dengan nilai 0 untuk menghitung jumlah huruf vokal.

// 3. Looping Melalui String:
// for (let i = 0; i < str.length; i++) { ... }
// Loop melalui setiap karakter dalam string str.

// 4. Menghitung Vokal:
// if (vowels.includes(str[i])) { ... }
// Jika karakter saat ini adalah huruf vokal, tambahkan 1 ke count.

// 5. Mengembalikan Hasil:
// return count;
// Mengembalikan nilai count, yaitu jumlah huruf vokal dalam string str.