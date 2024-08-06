// Buatlah sebuah fungsi bernama countOddEven yang menerima sebuah array berisi angka-angka
// dan mengembalikan sebuah objek dengan jumlah bilangan ganjil dan genap.

function countOddEven(arr) {
  let count = { odd: 0, even: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
  }
  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(countOddEven(numbers)); // Output: { odd: 4, even: 3 }

// Penjelasan:

// 1. Deklarasi Fungsi:
// function countOddEven(arr) { ... }
// Mendeklarasikan fungsi bernama countOddEven yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let count = { odd: 0, even: 0 };
// Menginisialisasi objek count dengan properti odd dan even yang masing-masing bernilai 0 untuk menghitung jumlah bilangan ganjil dan genap.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Loop melalui setiap elemen dalam array arr.

// 4. Menghitung Bilangan Ganjil dan Genap:
// if (arr[i] % 2 === 0) { ... }
// Jika elemen saat ini adalah bilangan genap, tambahkan 1 ke count.even.
// else { ... }
// Jika elemen saat ini adalah bilangan ganjil, tambahkan 1 ke count.odd.

// 5. Mengembalikan Hasil:
// return count;
// Mengembalikan objek count, yaitu jumlah bilangan ganjil dan genap dalam array arr.