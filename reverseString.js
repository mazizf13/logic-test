// Buatlah sebuah fungsi bernama reverseString yang menerima sebuah string 
// dan mengembalikan string tersebut dalam urutan terbalik.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const str = "hello";
  console.log(reverseString(str)); // Output: "olleh"


// Penjelasan:

// 1. Deklarasi Fungsi:
// function reverseString(str) { ... }
// Mendeklarasikan fungsi bernama reverseString yang menerima satu parameter str, yaitu string yang ingin dibalik.

// 2. Inisialisasi Variabel:
// let reversed = '';
// Membuat variabel reversed yang merupakan string kosong. Variabel ini akan digunakan untuk menyimpan hasil string yang telah dibalik.

// 3. Looping dari Akhir ke Awal:
// for (let i = str.length - 1; i >= 0; i--) { ... }
// Menggunakan loop for yang dimulai dari indeks terakhir string (str.length - 1) hingga indeks pertama (0).
// i-- berarti setiap iterasi, nilai i akan berkurang satu.

// 4. Menambahkan Karakter ke reversed:
// reversed += str[i];
// Pada setiap iterasi, karakter pada indeks i dari str ditambahkan ke variabel reversed.
// Misalnya, jika str adalah "hello", pada iterasi pertama str[i] adalah o (karakter terakhir) dan akan ditambahkan ke reversed. Pada iterasi berikutnya, l (karakter kedua dari belakang) akan ditambahkan, dan seterusnya hingga semua karakter ditambahkan ke reversed dalam urutan terbalik.

// 5. Mengembalikan Hasil:
// return reversed;
// Setelah loop selesai, fungsi mengembalikan nilai reversed, yang merupakan string yang telah dibalik.
  