// Buatlah sebuah fungsi bernama sumOdd yang menerima sebuah array berisi angka-angka
// dan mengembalikan jumlah dari semua bilangan ganjil dalam array tersebut.

function sumOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOdd(numbers)); // Output: 9

// Penjelasan

// 1. Deklarasi Fungsi:
// function sumOdd(arr) { ... }
// Mendeklarasikan fungsi bernama sumOdd yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let sum = 0;
// Menginisialisasi variabel sum dengan nilai 0. Variabel ini akan digunakan untuk menyimpan jumlah total angka ganjil.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for untuk mengiterasi melalui setiap elemen dalam array arr. Variabel i adalah indeks dari elemen saat ini.

// 4. Memeriksa Bilangan Ganjil dan Menjumlahkannya:
// if (arr[i] % 2 !== 0) { ... }
// Pada setiap iterasi, memeriksa apakah elemen saat ini (arr[i]) adalah bilangan ganjil menggunakan operator modulus %. Jika elemen adalah bilangan ganjil (arr[i] % 2 !== 0), maka elemen tersebut ditambahkan ke variabel sum.

// 5. Mengembalikan Hasil:
// return sum;
// Setelah perulangan selesai, fungsi mengembalikan nilai dari sum, yang merupakan jumlah total dari semua angka ganjil dalam array arr.