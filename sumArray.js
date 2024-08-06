// Buatlah sebuah fungsi bernama sumArray yang menerima sebuah array berisi angka-angka 
// dan mengembalikan jumlah dari semua angka dalam array tersebut.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15

// Penjelasan:

// 1. Deklarasi Fungsi:
// function sumArray(arr) { ... }
// Mendeklarasikan fungsi bernama sumArray yang menerima satu parameter arr, yaitu array yang berisi angka-angka yang ingin dijumlahkan.

// 2. Inisialisasi Variabel:
// let sum = 0;
// Membuat variabel sum yang diinisialisasi dengan nilai 0. Variabel ini akan digunakan untuk menyimpan total jumlah dari semua angka dalam array.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for yang dimulai dari indeks pertama (0) hingga indeks terakhir (arr.length - 1).
// i++ berarti setiap iterasi, nilai i akan bertambah satu.

// 4. Menambahkan Nilai ke sum:
// sum += arr[i];
// Pada setiap iterasi, nilai arr[i] (nilai pada indeks i dari array arr) ditambahkan ke variabel sum.
// Misalnya, jika arr adalah [1, 2, 3, 4, 5], pada iterasi pertama arr[i] adalah 1 dan akan ditambahkan ke sum, yang awalnya 0. Pada iterasi berikutnya, 2 akan ditambahkan, dan seterusnya hingga semua nilai dalam array ditambahkan ke sum.

// 5. Mengembalikan Hasil:
// return sum;
// Setelah loop selesai, fungsi mengembalikan nilai sum, yang merupakan total jumlah dari semua angka dalam array.