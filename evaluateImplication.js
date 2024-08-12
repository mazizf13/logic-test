// Tentukan nilai kebenaran dari implikasi dua pernyataan berikut.
// p: Pak Rudi adalah manusia. (benar)
// q: Pak Rudi kelak akan mati. (benar)

function evaluateImplication(p, q) {
    return !p || q; 
}

const p = true;
const q = true;

const result = evaluateImplication(p, q);

console.log(`Nilai kebenaran dari implikasi p => q adalah: ${result}`);

console.log(`Pernyataan p (Pak Rudi adalah manusia) adalah: ${p}`);
console.log(`Pernyataan q (Pak Rudi kelak akan mati) adalah: ${q}`);

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node evaluateImplication.js

// Output
// Nilai kebenaran dari implikasi p => q adalah: true
// Pernyataan p (Pak Rudi adalah manusia) adalah: true
// Pernyataan q (Pak Rudi kelak akan mati) adalah: true