// Buatlah sebuah fungsi bernama filterEven yang menerima sebuah array berisi angka-angka 
// dan mengembalikan array baru yang hanya berisi angka-angka genap.

function filterEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEven(numbers)); // Output: [2, 4, 6]

// Penjelasan:

// 1. Deklarasi Fungsi:
// function filterEven(arr) { ... }
// Mendeklarasikan fungsi bernama filterEven yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let evenNumbers = [];
// Membuat variabel evenNumbers yang diinisialisasi dengan array kosong. Variabel ini akan digunakan untuk menyimpan angka-angka genap yang ditemukan dalam array arr.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for yang dimulai dari indeks pertama (0) hingga indeks terakhir (arr.length - 1).
// i++ berarti setiap iterasi, nilai i akan bertambah satu.

// 4. Pengecekan Angka Genap:
// if (arr[i] % 2 === 0) { ... }
// Pada setiap iterasi, jika arr[i] habis dibagi oleh 2 (arr[i] % 2 === 0), maka angka tersebut adalah genap.

// 5. Menambahkan Angka Genap ke evenNumbers:
// evenNumbers.push(arr[i]);
// Jika angka arr[i] adalah genap, maka angka tersebut ditambahkan ke array evenNumbers.

// 6. Mengembalikan Hasil:
// return evenNumbers;
// Setelah loop selesai, fungsi mengembalikan array evenNumbers, yang berisi semua angka genap yang ditemukan dalam array arr.