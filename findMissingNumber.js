// Buatlah sebuah fungsi bernama findMissingNumber yang menerima sebuah array berisi angka-angka dari 1 hingga n
// dengan satu angka yang hilang, dan mengembalikan angka yang hilang tersebut.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumN = (n * (n + 1)) / 2;
  const sumArr = arr.reduce((acc, num) => acc + num, 0);
  return sumN - sumArr;
}

const numbers = [1, 2, 4, 5, 6];
console.log(findMissingNumber(numbers)); // Output: 3

// Penjelasan:

// 1. Deklarasi Fungsi:
// function findMissingNumber(arr) { ... }
// Mendeklarasikan fungsi bernama findMissingNumber yang menerima satu parameter arr, yaitu array yang berisi angka-angka dari 1 hingga n dengan satu angka yang hilang.

// 2. Menghitung Jumlah Total:
// const n = arr.length + 1;
// Menghitung jumlah total angka n yang seharusnya ada dalam array.
// const sumN = (n * (n + 1)) / 2;
// Menghitung jumlah total dari 1 hingga n menggunakan rumus n * (n + 1) / 2.

// 3. Menghitung Jumlah dalam Array:
// const sumArr = arr.reduce((acc, num) => acc + num, 0);
// Menghitung jumlah total angka dalam array arr menggunakan metode reduce.

// 4. Menemukan Angka yang Hilang:
// return sumN - sumArr;
// Mengembalikan hasil pengurangan antara sumN dan sumArr, yaitu angka yang hilang.