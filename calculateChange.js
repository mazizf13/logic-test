// Buatlah function yang dapat digunakan oleh kasir untuk menghitung nilai uang kembalian beserta dengan pecahan uang yang bisa diberikan. Input berupa total belanja dan jumlah uang yang dibayarkan oleh pembeli. Output berupa kembalian (dibulatkan ke bawah Rp.100) yang harus diberikan kasir dengan detail pecahan uang yang harus diberikan. Pecahan yang tersedia adalah: 100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000, 500, 200, 100. Kembalikan nilai False apabila jumlah uang yang dibayarkan kurang dari total belanjanya

function calculateChange(totalAmount, amountPaid) {
    const denominations = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

    if (amountPaid < totalAmount) {
        return false;
    }

    let change = amountPaid - totalAmount;

    change = Math.floor(change / 100) * 100;

    const changeDetails = [];
    
    for (const denomination of denominations) {
        if (change >= denomination) {
            const count = Math.floor(change / denomination);
            changeDetails.push(`${count} ${denomination > 1000 ? 'lembar' : 'koin'} ${denomination}`);
            change %= denomination;
        }
    }

    const output = {
        originalChange: amountPaid - totalAmount,
        roundedChange: amountPaid - totalAmount - (amountPaid - totalAmount) % 100,
        denominations: changeDetails
    };

    return output;
}

// example usage
const totalAmount = 575650;
const amountPaid = 580000;

const result = calculateChange(totalAmount, amountPaid);

if (result) {
    console.log(`Total belanja seorang customer: ${totalAmount}`);
    console.log(`Pembeli membayar: ${amountPaid}`);
    console.log('==========================')
    console.log(`Kembalian yang diberikan kasir: ${result.originalChange}`);
    console.log(`Dibulatkan menjadi: ${result.roundedChange}`);
    console.log('==========================')
    console.log('Pecahan uang:');
    result.denominations.forEach(denomination => console.log(denomination));
} else {
    console.log('Jumlah uang yang dibayarkan kurang dari total belanja.');
}

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node calculateChange.js

// Output: 
// Total belanja seorang customer: 575650
// Pembeli membayar: 580000
// ==========================
// Kembalian yang diberikan kasir: 4350
// Dibulatkan menjadi: 4300
// ==========================
// Pecahan uang:
// 2 lembar 2000
// 1 koin 200
// 1 koin 100