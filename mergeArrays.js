// Buatlah sebuah fungsi bernama mergeArrays yang menerima dua array berisi angka-angka yang sudah diurutkan (ascending)
// dan mengembalikan satu array baru yang juga berisi angka-angka tersebut dalam urutan yang terurut.

function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


// Penjelasan

// 1. Deklarasi Fungsi:
// function mergeArrays(arr1, arr2) { ... }
// Mendeklarasikan fungsi bernama mergeArrays yang menerima dua parameter arr1 dan arr2, yaitu dua array yang sudah diurutkan.

// 2. Inisialisasi Variabel:
// let merged = [];
// Menginisialisasi array kosong merged yang akan digunakan untuk menyimpan hasil penggabungan.
// let i = 0; let j = 0;
// Menginisialisasi dua variabel indeks i dan j untuk melacak posisi saat ini dalam arr1 dan arr2.

// 3. Menggabungkan Array dengan Looping:
// while (i < arr1.length && j < arr2.length) { ... }
// Menggunakan loop while untuk iterasi selama masih ada elemen yang tersisa di kedua array.
// if (arr1[i] < arr2[j]) { ... } else { ... }
// Membandingkan elemen saat ini dari arr1 dan arr2, dan menambahkan elemen yang lebih kecil ke array merged.

// 4. Menambahkan Sisa Elemen:
// while (i < arr1.length) { ... }
// Loop untuk menambahkan elemen yang tersisa di arr1 jika ada.
// while (j < arr2.length) { ... }
// Loop untuk menambahkan elemen yang tersisa di arr2 jika ada.

// 5. Mengembalikan Hasil:
// return merged;
// Mengembalikan array merged yang berisi elemen-elemen dari arr1 dan arr2 dalam urutan yang terurut.
