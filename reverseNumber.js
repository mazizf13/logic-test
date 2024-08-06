// Buatlah sebuah fungsi bernama reverseNumber yang menerima sebuah angka 
// dan mengembalikan angka tersebut dalam urutan terbalik.

function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(12345)); // Output: 54321

// Penjelasan:

// 1. Deklarasi Fungsi:
// function reverseNumber(num) { ... }
// Mendeklarasikan fungsi bernama reverseNumber yang menerima satu parameter num, yaitu angka yang akan dibalik.

// 2. Inisialisasi Variabel:
// let reversed = 0;
// Menginisialisasi variabel reversed dengan nilai 0 untuk menyimpan hasil pembalikan angka.

// 3. Looping untuk Membalikkan Angka:
// while (num !== 0) { ... }
// Loop melalui angka num selama nilainya tidak sama dengan 0.
// reversed = reversed * 10 + (num % 10);
// Menambahkan digit terakhir dari num ke reversed.
// num = Math.floor(num / 10);
// Menghapus digit terakhir dari num dengan membagi num dengan 10 dan menggunakan Math.floor untuk membulatkannya ke bawah.

// 4. Mengembalikan Hasil:
// return reversed;
// Mengembalikan nilai reversed, yaitu angka yang telah dibalik.
