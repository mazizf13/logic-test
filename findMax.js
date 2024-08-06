// Buatlah sebuah fungsi bernama findMax yang menerima sebuah array berisi angka-angka 
// dan mengembalikan angka terbesar dari array tersebut.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); // Output: 5

// Penjelasan:

// 1. Deklarasi Fungsi:
// function findMax(arr) { ... }
// Mendeklarasikan fungsi bernama findMax yang menerima satu parameter arr, yaitu array yang berisi angka-angka yang ingin dicari nilai maksimumnya.

// 2. Inisialisasi Variabel:
// let max = arr[0];
// Membuat variabel max yang diinisialisasi dengan nilai dari elemen pertama array arr (arr[0]). Variabel ini akan digunakan untuk menyimpan nilai maksimum yang ditemukan sejauh ini.

// 3. Looping Melalui Array:
// for (let i = 1; i < arr.length; i++) { ... }
// Menggunakan loop for yang dimulai dari indeks kedua (1) hingga indeks terakhir (arr.length - 1).
// i++ berarti setiap iterasi, nilai i akan bertambah satu.

// 4. Membandingkan dan Mengupdate Nilai Maksimum:
// if (arr[i] > max) { max = arr[i]; }
// Pada setiap iterasi, jika nilai arr[i] (nilai pada indeks i dari array arr) lebih besar dari max, maka nilai max diupdate menjadi arr[i].
// Misalnya, jika arr adalah [1, 2, 3, 4, 5], pada iterasi pertama, arr[1] adalah 2, dan jika 2 lebih besar dari max (yang awalnya 1), maka max diupdate menjadi 2. Proses ini berlanjut hingga akhir array.

// 5. Mengembalikan Hasil:
// return max;
// Setelah loop selesai, fungsi mengembalikan nilai max, yang merupakan angka terbesar dalam array.