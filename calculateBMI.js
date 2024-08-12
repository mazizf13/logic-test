// Pada suatu hari udin dan nanang sedang mencoba membandingkan BMI (Indeks Massa Tubuh) mereka, yang dihitung menggunakan rumus: BMI = massa / tinggi ** 2 = massa / (tinggi * tinggi) (massa dalam kg dan tinggi dalam meter). 

// Tugas Anda, bantulah udin dan nanang menghitung BMI mereka mengikuti langkah langkah berikut ini: 

// Simpan massa dan tinggi udin dan nanang dalam sebuah variabel.

// Hitunglah  kedua BMI mereka menggunakan rumus (kamu bahkan dapat mengimplementasikan kedua versi rumus diatas).

// Buat variabel dengan output Boolean yang berisi informasi apakah udin memiliki BMI yang lebih tinggi daripada nanang. 

// Tampilkan keluaran yang bagus di konsol, yang menyatakan siapa yang memiliki BMI yang lebih tinggi. Pesannya dapat berupa "BMI Udin lebih tinggi dari Nanang!" atau sebaliknya.

// Gunakan konsep template literal untuk menyertakan nilai-nilai BMI dalam keluaran. Contoh: "BMI Udin (28,3) lebih tinggi dari Nanang  (23,9)!"

// Data uji: 

// Data 1: Berat Udin  78 kg dan tinggi 1,69 m. Berat Nanang 92 kg dan tinggi 1,95 m. 

// Data 2: Berat Udin 95 kg dan tinggi 1,88 m. Berat Nanang 85 kg dan tinggi 1,76 m.



function calculateBMI(mass, height) {
    return mass / (height * height);
}

const data1 = {
    udin: { mass: 78, height: 1.69 },
    nanang: { mass: 92, height: 1.95 }
};

const data2 = {
    udin: { mass: 95, height: 1.88 },
    nanang: { mass: 85, height: 1.76 }
};

function compareBMI(data) {
    const bmiUdin = calculateBMI(data.udin.mass, data.udin.height);
    const bmiNanang = calculateBMI(data.nanang.mass, data.nanang.height);

    const udinHasHigherBMI = bmiUdin > bmiNanang;

    if (udinHasHigherBMI) {
        console.log(`BMI Udin (${bmiUdin.toFixed(1)}) lebih tinggi dari Nanang (${bmiNanang.toFixed(1)})!`);
    } else {
        console.log(`BMI Nanang (${bmiNanang.toFixed(1)}) lebih tinggi dari Udin (${bmiUdin.toFixed(1)})!`);
    }
}

console.log('Data 1:');
compareBMI(data1);

console.log('Data 2:');
compareBMI(data2);


// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node calculateBMI.js

// Output

// Data 1:
// BMI Udin (27.3) lebih tinggi dari Nanang (24.2)!
// Data 2:
// BMI Nanang (27.4) lebih tinggi dari Udin (26.9)!