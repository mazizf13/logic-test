// Kamu dan temanmu sedang bermain permainan lempar uang logam. Uang logam tersebut memiliki dua sisi, yaitu sisi gambar (G) dan sisi angka (A). Kamu memprediksi bahwa sisi gambar akan muncul. Dalam permainan ini, kamu melempar uang logam sebanyak 3 kali berturut-turut.

// Pertanyaan:

// Hitunglah peluang munculnya sisi gambar setidaknya satu kali dalam 3 lemparan uang logam tersebut.

// Berapa peluang munculnya sisi gambar pada setiap lemparan uang logam?Kamu dan temanmu sedang bermain permainan lempar uang logam. Uang logam tersebut memiliki dua sisi, yaitu sisi gambar (G) dan sisi angka (A). Kamu memprediksi bahwa sisi gambar akan muncul. Dalam permainan ini, kamu melempar uang logam sebanyak 3 kali berturut-turut.

// Pertanyaan:

// Hitunglah peluang munculnya sisi gambar setidaknya satu kali dalam 3 lemparan uang logam tersebut.

// Berapa peluang munculnya sisi gambar pada setiap lemparan uang logam?

function calculateProbability(numFlips) {
    const probabilityHead = 0.5;
    
    const probabilityTail = 1 - probabilityHead;

    const probabilityNoHead = Math.pow(probabilityTail, numFlips);

    const probabilityAtLeastOneHead = 1 - probabilityNoHead;

    return probabilityAtLeastOneHead;
}

const numFlips = 3;

const probability = calculateProbability(numFlips);

console.log(`Peluang munculnya sisi gambar setidaknya satu kali dalam ${numFlips} lemparan adalah ${probability.toFixed(4)} atau ${Math.round(probability * 100)}%.`);

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node calculateProbability.js

// Output
// Peluang munculnya sisi gambar setidaknya satu kali dalam 3 lemparan adalah 0.8750 atau 88%.