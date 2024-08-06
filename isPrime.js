// Buatlah sebuah fungsi bernama isPrime yang menerima sebuah angka 
// dan mengembalikan true jika angka tersebut adalah bilangan prima, dan false jika bukan.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(4)); // Output: false

// Penjelasan:

// 1. Deklarasi Fungsi:
// function isPrime(num) { ... }
// Mendeklarasikan fungsi bernama isPrime yang menerima satu parameter num, yaitu angka yang akan diperiksa apakah merupakan bilangan prima atau bukan.

// 2. Pengecekan Angka Kurang dari atau Sama dengan 1:
// if (num <= 1) return false;
// Jika num kurang dari atau sama dengan 1, maka langsung mengembalikan false, karena bilangan prima adalah bilangan bulat positif yang lebih besar dari 1.

// 3. Looping untuk Mencari Faktor:
// for (let i = 2; i < num; i++) { ... }
// Menggunakan loop for yang dimulai dari 2 hingga num - 1 untuk memeriksa apakah num memiliki faktor selain 1 dan num itu sendiri.

// 4. Pengecekan Faktor:
// if (num % i === 0) return false;
// Pada setiap iterasi, jika num habis dibagi oleh i (num % i === 0), maka mengembalikan false, karena num memiliki faktor lain selain 1 dan num, sehingga bukan bilangan prima.

// 5. Mengembalikan Hasil:
// return true;
// Jika loop selesai tanpa menemukan faktor selain 1 dan num, maka mengembalikan true, karena num adalah bilangan prima.