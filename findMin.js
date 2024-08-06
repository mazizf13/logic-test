// Buatlah sebuah fungsi bernama findMin yang menerima sebuah array berisi angka-angka 
// dan mengembalikan angka terkecil dalam array tersebut.

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numbers = [1, 2, 3, 0, 4, 5];
console.log(findMin(numbers)); // Output: 0

// Penjelasan:

// 1. Deklarasi Fungsi:
// function findMin(arr) { ... }
// Mendeklarasikan fungsi bernama findMin yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let min = arr[0];
// Menginisialisasi variabel min dengan nilai elemen pertama dari array arr.

// 3. Looping Melalui Array:
// for (let i = 1; i < arr.length; i++) { ... }
// Loop dimulai dari indeks 1 karena indeks 0 sudah diinisialisasi ke min.

// 4. Pengecekan Nilai Minimum:
// if (arr[i] < min) { ... }
// Jika elemen saat ini (arr[i]) lebih kecil dari nilai min, maka min diperbarui dengan nilai elemen tersebut.

// 5. Mengembalikan Hasil:
// return min;
// Setelah loop selesai, fungsi mengembalikan nilai min, yaitu angka terkecil dalam array arr.
