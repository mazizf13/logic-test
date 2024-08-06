// Buatlah sebuah fungsi bernama capitalizeWords yang menerima sebuah string
// dan mengembalikan string baru di mana setiap kata dimulai dengan huruf kapital.

function capitalizeWords(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Penjelasan

// 1. Deklarasi Fungsi:
// function capitalizeWords(str) { ... }
// Mendeklarasikan fungsi bernama capitalizeWords yang menerima satu parameter str, yaitu string yang akan dimodifikasi.

// 2. Memisahkan Kata:
// let words = str.split(' ');
// Memisahkan string str menjadi array kata-kata menggunakan metode split dengan spasi sebagai pemisah.

// 3. Looping untuk Mengkapitalisasi Kata:
// for (let i = 0; i < words.length; i++) { ... }
// Loop melalui setiap kata dalam array words.
// words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// Mengkapitalisasi huruf pertama dari kata dengan toUpperCase dan menggabungkannya dengan sisa kata menggunakan substring.

// 4. Menggabungkan Kata:
// return words.join(' ');
// Menggabungkan kata-kata kembali menjadi satu string dengan menggunakan join dengan spasi sebagai pemisah.