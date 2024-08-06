//Buatlah sebuah fungsi bernama countOccurrences yang menerima sebuah array berisi angka-angka 
// dan mengembalikan sebuah objek yang menunjukkan berapa kali setiap angka muncul dalam array tersebut.

function countOccurrences(arr) {
  let occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }
  return occurrences;
}

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countOccurrences(numbers)); 
// Output: { 1: 1, 2: 2, 3: 3, 4: 4 }

// Penjelasan

// 1. Deklarasi Fungsi:
// function countOccurrences(arr) { ... }
// Mendeklarasikan fungsi bernama countOccurrences yang menerima satu parameter arr, yaitu array yang berisi angka-angka.

// 2. Inisialisasi Variabel:
// let occurrences = {};
// Membuat variabel occurrences yang diinisialisasi dengan objek kosong. Objek ini akan digunakan untuk menyimpan jumlah kemunculan setiap angka dalam array arr.

// 3. Looping Melalui Array:
// for (let i = 0; i < arr.length; i++) { ... }
// Menggunakan loop for yang dimulai dari indeks pertama (0) hingga indeks terakhir (arr.length - 1).
// i++ berarti setiap iterasi, nilai i akan bertambah satu.

// 4. Menghitung Kemunculan Angka:
// let num = arr[i];
// Menyimpan nilai arr[i] dalam variabel num.
// if (occurrences[num]) { occurrences[num]++; } else { occurrences[num] = 1; }
// Jika occurrences sudah memiliki properti num, tambahkan 1 ke nilai properti tersebut (occurrences[num]++). Jika tidak, buat properti num dan inisialisasi dengan nilai 1 (occurrences[num] = 1).

// 5. Mengembalikan Hasil:
// return occurrences;
// Setelah loop selesai, fungsi mengembalikan objek occurrences, yang berisi jumlah kemunculan setiap angka dalam array arr.

// Fungsi ini efektif untuk menghitung jumlah kemunculan setiap angka dalam sebuah array dengan cara iterasi melalui setiap elemen array dan menambah nilai properti yang sesuai dalam objek occurrences.