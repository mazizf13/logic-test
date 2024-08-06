// Buatlah sebuah fungsi bernama countChar yang menerima sebuah string
// dan sebuah karakter, kemudian mengembalikan jumlah kemunculan karakter tersebut dalam string.

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("hello world", "l")); // Output: 3

// Penjelasan:

// 1. Deklarasi Fungsi:
// function countChar(str, char) { ... }
// Mendeklarasikan fungsi bernama countChar yang menerima dua parameter: str (string yang akan dihitung) dan char (karakter yang akan dihitung jumlah kemunculannya).

// 2. Inisialisasi Variabel:
// let count = 0;
// Menginisialisasi variabel count dengan nilai 0 untuk menghitung jumlah kemunculan karakter.

// 3. Looping Melalui String:
// for (let i = 0; i < str.length; i++) { ... }
// Loop melalui setiap karakter dalam string str.

// 4. Menghitung Karakter:
// if (str[i] === char) { ... }
// Jika karakter saat ini sama dengan char, tambahkan 1 ke count.

// 5. Mengembalikan Hasil:
// return count;
// Mengembalikan nilai count, yaitu jumlah kemunculan karakter dalam string str.