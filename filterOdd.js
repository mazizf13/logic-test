// Buatlah sebuah fungsi bernama filterOdd yang menerima sebuah array berisi angka-angka 
// dan mengembalikan array baru yang hanya berisi angka-angka ganjil.

function filterOdd(arr) {
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }
  return oddNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterOdd(numbers)); // Output: [1, 3, 5]

// Penjelasan:
// 1. Deklarasi Fungsi:
// function filterOdd(arr) { ... }
// Mendeklarasikan fungsi bernama filterOdd yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let oddNumbers = [];
// Menginisialisasi array kosong oddNumbers yang akan digunakan untuk menyimpan angka-angka ganjil.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Loop melalui setiap elemen dalam array arr menggunakan perulangan for. Variabel i adalah indeks dari elemen saat ini, dimulai dari 0 hingga arr.length - 1.

// 4. Memeriksa Bilangan Ganjil:
// if (arr[i] % 2 !== 0) { ... }
// Pada setiap iterasi, pemeriksaan dilakukan untuk menentukan apakah elemen saat ini (arr[i]) adalah bilangan ganjil. Ini dilakukan dengan menggunakan operator modulus %. Jika arr[i] % 2 tidak sama dengan 0, maka arr[i] adalah bilangan ganjil.

// 5. Menambahkan Bilangan Ganjil ke Array:
// oddNumbers.push(arr[i]);
// Jika elemen saat ini adalah bilangan ganjil, maka elemen tersebut ditambahkan ke array oddNumbers menggunakan metode push.

// 6. Mengembalikan Hasil:
// return oddNumbers;
// Setelah perulangan selesai, fungsi mengembalikan array oddNumbers yang berisi semua angka ganjil dari array input arr.