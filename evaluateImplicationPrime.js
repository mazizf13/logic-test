// Tentukan nilai kebenaran dari implikasi dua pernyataan berikut.

// p: 2 + 5 = 7 (benar)

// q: 7 bukan bilangan prima (salah)

function evaluateImplication(p, q) {
    return !p || q;
}

const result = evaluateImplication(
    // P: 2 + 5 = 7
    (2 + 5 === 7),
    // Q: 7 bukan bilangan prima
    !isPrime(7)
);

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

console.log(`Nilai kebenaran dari implikasi p => q adalah: ${result}`);
console.log('===================================================')
console.log(`Pernyataan p (2 + 5 = 7) adalah: ${2 + 5 === 7}`);
console.log(`Pernyataan q (7 bukan bilangan prima) adalah: ${!isPrime(7)}`);

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node evaluateImplicationPrime.js

// Output
// Nilai kebenaran dari implikasi p => q adalah: false
// ===================================================
// Pernyataan p (2 + 5 = 7) adalah: true
// Pernyataan q (7 bukan bilangan prima) adalah: false