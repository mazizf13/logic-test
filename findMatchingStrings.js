// Buatlah fungsi yang menerima Inputan pertama adalah N jumlah string yang akan diambil kemudian dibaca N (s1, s2, … sN) string, kemudian diperlukan sebuah algoritma untuk mencocokan semua string satu sama lain dan mengeluarkan nomor string yang cocok satu sama lain. Jika ada beberapa set string yang cocok, tampilkan hasilnya untuk 1 set string saja yang pertama kali ditemukan kecocokan (abaikan set string yang lain). String yang dicocokkan bersifat case insensitive. Jika tidak ditemukan string yang cocok, kembalikan hasil false. Tidak boleh menggunakan fungsi-fungsi array bawaan dari bahasa pemrograman, misalnya: Array Search, Array Filter. Gunakan percabangan dan perulangan secara manual (for / if / do while / etc..). 

function findMatchingStrings(N, strings) {
    // case insensitive
    function toLowerCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            // change string to small
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(charCode + 32);
            } else {
                result += str[i];
            }
        }
        return result;
    }

    // check
    function areStringsMatching(str1, str2) {
        return toLowerCase(str1) === toLowerCase(str2);
    }

    // save results
    let matchingSetFound = false;
    let result = [];

    // loop to Compare strings
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (areStringsMatching(strings[i], strings[j])) {
                result = [i + 1, j + 1]; 
                matchingSetFound = true;
                break;
            }
        }
        if (matchingSetFound) break;
    }

    if (matchingSetFound) {
        return result;
    } else {
        return false;
    }
}

const N = 5;
const strings = ["pisang", "goreng", "enak", "sekali", "rasanya"];
console.log(findMatchingStrings(N, strings));

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node findMatchingStrings.js

// Output: false