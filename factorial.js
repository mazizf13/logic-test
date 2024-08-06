// Buatlah sebuah fungsi bernama factorial yang menerima sebuah angka positif 
// dan mengembalikan nilai faktorial dari angka tersebut.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Penjelasan
// 1. Deklarasi Fungsi:
// function factorial(n) { ... }
// Mendeklarasikan fungsi bernama factorial yang menerima satu parameter n, yaitu angka yang akan dihitung faktorialnya.

// 2. Kondisi Dasar:
// if (n === 0 || n === 1) { ... }
// Jika n adalah 0 atau 1, kembalikan 1, karena faktorial dari 0 dan 1 adalah 1.

// 3. Rekursi:
// return n * factorial(n - 1);
// Mengembalikan n dikalikan dengan hasil faktorial dari n - 1. Ini membuat fungsi memanggil dirinya sendiri hingga mencapai kondisi dasar.