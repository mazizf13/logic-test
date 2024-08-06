// Buatlah sebuah fungsi bernama removeDuplicates yang menerima sebuah array berisi angka-angka 
// dan mengembalikan array baru yang hanya berisi angka-angka unik (tanpa duplikasi).

function removeDuplicates(arr) {
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i]);
    }
  }
  return uniqueNumbers;
}

const numbers = [1, 2, 2, 3, 3 ,3, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]

// Penjelasan

// 1. Deklarasi Fungsi:
// function removeDuplicates(arr) { ... }
// Mendeklarasikan fungsi bernama removeDuplicates yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let uniqueNumbers = [];
// Membuat variabel uniqueNumbers yang diinisialisasi dengan array kosong. Variabel ini akan digunakan untuk menyimpan angka-angka unik yang ditemukan dalam array arr.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for yang dimulai dari indeks pertama (0) hingga indeks terakhir (arr.length - 1).
// i++ berarti setiap iterasi, nilai i akan bertambah satu.

// 4. Pengecekan Angka Unik:
// if (!uniqueNumbers.includes(arr[i])) { ... }
// Pada setiap iterasi, jika uniqueNumbers tidak mengandung arr[i] (!uniqueNumbers.includes(arr[i])), maka angka tersebut adalah unik.

// 5. Menambahkan Angka Unik ke uniqueNumbers:
// uniqueNumbers.push(arr[i]);
// Jika angka arr[i] adalah unik, maka angka tersebut ditambahkan ke array uniqueNumbers.

// 6. Mengembalikan Hasil:
// return uniqueNumbers;
// Setelah loop selesai, fungsi mengembalikan array uniqueNumbers, yang berisi semua angka unik yang ditemukan dalam array arr.