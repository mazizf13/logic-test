// Buatlah sebuah fungsi bernama fibonacci yang menerima sebuah angka n
// dan mengembalikan array berisi deret Fibonacci hingga n angka.

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]

// Penjelasan:

// 1. Deklarasi Fungsi:
// function fibonacci(n) { ... }
// Mendeklarasikan fungsi bernama fibonacci yang menerima satu parameter n, yaitu jumlah angka Fibonacci yang ingin dihasilkan.

// 2. Inisialisasi Array:
// let fib = [0, 1];
// Menginisialisasi array fib dengan dua angka pertama dari deret Fibonacci, yaitu 0 dan 1.

// 3. Looping untuk Menghitung Deret Fibonacci:
// for (let i = 2; i < n; i++) { ... }
// Loop dimulai dari i = 2 (indeks ketiga) karena dua angka pertama sudah ada.
// fib.push(fib[i - 1] + fib[i - 2]);
// Menambahkan angka Fibonacci berikutnya ke array dengan menjumlahkan dua angka sebelumnya.

// 4. Mengembalikan Hasil:
// return fib.slice(0, n);
// Mengembalikan array fib yang dipotong hingga panjang n untuk memastikan hanya n elemen yang dikembalikan jika n lebih kecil dari panjang array fib.
