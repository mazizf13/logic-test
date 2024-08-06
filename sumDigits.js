// Buatlah sebuah fungsi bernama sumDigits yang menerima sebuah angka positif 
// dan mengembalikan jumlah dari semua digit dalam angka tersebut.

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumDigits(1234)); // Output: 10

// Penjelasan

// 1. Deklarasi Fungsi:
// function sumDigits(num) { ... }
// Mendeklarasikan fungsi bernama sumDigits yang menerima satu parameter num, yaitu angka positif yang akan dijumlahkan digit-digitnya.

// 2. Inisialisasi Variabel:
// let sum = 0;
// Menginisialisasi variabel sum dengan nilai 0.

// 3. Looping untuk Menjumlahkan Digit:
// while (num > 0) { ... }
// Menggunakan loop while untuk iterasi selama num lebih besar dari 0.
// sum += num % 10;
// Menambahkan digit terakhir dari num ke sum.
// num = Math.floor(num / 10);
// Menghapus digit terakhir dari num dengan membagi num dengan 10 dan menggunakan Math.floor untuk membulatkannya ke bawah.

// 4. Mengembalikan Hasil:
// return sum;
// Mengembalikan nilai sum, yaitu jumlah dari semua digit dalam num.