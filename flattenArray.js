// Buatlah sebuah fungsi bernama flattenArray yang menerima sebuah array dua dimensi 
// dan mengembalikan array satu dimensi.

function flattenArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }
  return flat;
}

const arr = [[1, 2], [3, 4], [5, 6]];
console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6]

// Penjelasan:

// 1. Deklarasi Fungsi:
// function flattenArray(arr) { ... }
// Mendeklarasikan fungsi bernama flattenArray yang menerima satu parameter arr, yaitu array dua dimensi yang akan diubah menjadi array satu dimensi.

// 2. Inisialisasi Variabel:
// let flat = [];
// Menginisialisasi array kosong flat untuk menyimpan hasil array satu dimensi.

// 3. Looping Melalui Array Dua Dimensi:

// for (let i = 0; i < arr.length; i++) { ... }
// Loop melalui setiap sub-array dalam array arr.
// Looping Melalui Sub-Array:

// for (let j = 0; j < arr[i].length; j++) { ... }
// Loop melalui setiap elemen dalam sub-array arr[i].
// Menambahkan Elemen ke Array Satu Dimensi:

// flat.push(arr[i][j]);
// Tambahkan elemen saat ini dari sub-array arr[i] ke array flat.
// Mengembalikan Hasil:

// return flat;
// Mengembalikan array flat, yaitu array satu dimensi yang berisi semua elemen dari array dua dimensi arr.