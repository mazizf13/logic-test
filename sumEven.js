// Buatlah sebuah fungsi bernama sumOdd yang menerima sebuah array berisi angka-angka
// dan mengembalikan jumlah dari semua bilangan genap dalam array tersebut.

function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumEven(numbers)); // Output: 6

// Penjelasan

// 1. Deklarasi Fungsi:
// function sumEven(arr) { ... }
// Mendeklarasikan fungsi bernama sumEven yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let sum = 0;
// Menginisialisasi variabel sum dengan nilai 0. Variabel ini akan digunakan untuk menyimpan jumlah total angka genap.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for untuk mengiterasi melalui setiap elemen dalam array arr. Variabel i adalah indeks dari elemen saat ini.

// 4. Memeriksa Bilangan Genap dan Menjumlahkannya:
// if (arr[i] % 2 === 0) { ... }
// Pada setiap iterasi, memeriksa apakah elemen saat ini (arr[i]) adalah bilangan genap menggunakan operator modulus %. Jika elemen adalah bilangan genap (arr[i] % 2 === 0), maka elemen tersebut ditambahkan ke variabel sum.

// 5. Mengembalikan Hasil:
// return sum;
// Setelah perulangan selesai, fungsi mengembalikan nilai dari sum, yang merupakan jumlah total dari semua angka genap dalam array arr.