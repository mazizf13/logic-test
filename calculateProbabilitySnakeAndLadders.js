// Kamu sedang bermain ular tangga dan mengocok dadu dengan enam sisi, 
// yang masing-masing memiliki mata 1, 2, 3, 4, 5, dan 6. Hitunglah peluang untuk setiap kasus berikut:

// Peluang munculnya mata dadu 1.

// Peluang munculnya mata dadu 1 atau 6.

// Peluang munculnya mata dadu 2 atau 3.

// Peluang munculnya mata dadu genap (2, 4, atau 6).

function calculateProbability(favorableOutcomes, totalOutcomes) {
    return favorableOutcomes / totalOutcomes;
}

const totalOutcomes = 6;

const favorableOutcomes1 = 1; 
const probability1 = calculateProbability(favorableOutcomes1, totalOutcomes);

const favorableOutcomes2 = 2; 
const probability2 = calculateProbability(favorableOutcomes2, totalOutcomes);

const favorableOutcomes3 = 2; 
const probability3 = calculateProbability(favorableOutcomes3, totalOutcomes);

const favorableOutcomes4 = 3; 
const probability4 = calculateProbability(favorableOutcomes4, totalOutcomes);

console.log(`Peluang munculnya mata dadu 1: ${probability1.toFixed(2)}`);
console.log(`Peluang munculnya mata dadu 1 atau 6: ${probability2.toFixed(2)}`);
console.log(`Peluang munculnya mata dadu 2 atau 3: ${probability3.toFixed(2)}`);
console.log(`Peluang munculnya mata dadu genap (2, 4, atau 6): ${probability4.toFixed(2)}`);

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node calculateProbabilitySnakeAndLadders.js

// Output
// Peluang munculnya mata dadu 1: 0.17
// Peluang munculnya mata dadu 1 atau 6: 0.33
// Peluang munculnya mata dadu 2 atau 3: 0.33
// Peluang munculnya mata dadu genap (2, 4, atau 6): 0.50