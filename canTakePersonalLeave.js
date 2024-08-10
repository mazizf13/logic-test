// Buatlah function untuk membantu menentukan apakah seorang karyawan boleh mengambil cuti pribadi atau tidak. 

//  Peraturan: 
// - Cuti kantor = 14 hari per tahun. 
// - Jumlah cuti pribadi adalah jumlah cuti kantor - cuti bersama. 
// - Untuk karyawan baru tidak berhak mengambil cuti pribadi selama 180 hari pertama. 
// - Total kuota cuti untuk karyawan baru di tahun pertama adalah jumlah hari / 365 x jumlah cuti pribadi di tahun tersebut (pembulatan kebawah). Jumlah hari dihitung mulai tanggal masuk + 180 hari sampai dengan 31 Desember di tahun tersebut. 
// - Cuti pribadi max 3 hari berturutan. 

// Contoh Kasus: 
// - Karyawan baru masuk pada tanggal 1 Mei 2021. - Jumlah cuti bersama tahun 2021 adalah 7 hari. - Karyawan baru hanya dapat mengambil cuti pada tanggal: 1 Mei 2021 + 180 hari = mulai 28 Oktober 2021.  
// - Jumlah hari dihitung dari 28 Oktober 2021 s/d 31 Desember 2021, sehingga = 64 hari. 
// - Jumlah cuti pribadi yang bisa diambil adalah: 64/365 x 7 hari cuti pribadi = 1 hari cuti pribadi (pembulatan kebawah). • 
// - Kesimpulan: Karyawan baru yang masuk di tanggal 1 Mei 2021 boleh mengambil cuti pribadi sebanyak 1 hari antara rentang tanggal 28 Oktober 2021 s/d 31 Desember 2021. 

//  Input: 
// - Jumlah Cuti Bersama 
// - Tanggal join karyawan 
// - Tanggal rencana cuti • Durasi cuti (hari)

//  Output: 
// - True / False 
// - Alasan   

function canTakePersonalLeave(joinDate, holidayDays, leaveStartDate, leaveDuration) {
    const totalAnnualLeave = 14;
    const maxContinuousLeave = 3;
    
    const join = new Date(joinDate);
    const leaveStart = new Date(leaveStartDate);
    
    const eligibleStartDate = new Date(join);
    eligibleStartDate.setDate(eligibleStartDate.getDate() + 180);
    
    if (leaveStart < eligibleStartDate) {
        return { canTakeLeave: false, reason: "Cuti pribadi tidak bisa diambil sebelum 180 hari sejak bergabung." };
    }
    
    const endOfYear = new Date(join.getFullYear(), 11, 31);
    const daysAvailable = Math.max(0, Math.floor((endOfYear - eligibleStartDate) / (1000 * 60 * 60 * 24)));
    
    const personalLeaveQuota = Math.floor((daysAvailable / 365) * (totalAnnualLeave - holidayDays));
    
    if (leaveDuration > personalLeaveQuota) {
        return { canTakeLeave: false, reason: "Jumlah hari cuti pribadi melebihi kuota yang tersedia." };
    }
    if (leaveDuration > maxContinuousLeave) {
        return { canTakeLeave: false, reason: "Durasi cuti pribadi tidak boleh lebih dari 3 hari berturut-turut." };
    }
    
    return { canTakeLeave: true, reason: "Cuti pribadi dapat diambil." };
}

// usage:

console.log(canTakePersonalLeave("2021-05-01", 7, "2021-11-01", 1));
console.log(canTakePersonalLeave("2021-05-01", 7, "2021-09-01", 1));
console.log(canTakePersonalLeave("2021-05-01", 7, "2021-11-01", 5));
console.log(canTakePersonalLeave("2021-05-01", 7, "2021-11-01", 4));
console.log(canTakePersonalLeave("2021-05-01", 5, "2021-12-01", 2));

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node canTakePersonalLeave.js

// Output
// Output: { canTakeLeave: true, reason: "Cuti pribadi dapat diambil." }
// Output: { canTakeLeave: false, reason: "Cuti pribadi tidak bisa diambil sebelum 180 hari sejak bergabung." }
// Output: { canTakeLeave: false, reason: "Jumlah hari cuti pribadi melebihi kuota yang tersedia." }
// Output: { canTakeLeave: false, reason: "Durasi cuti pribadi tidak boleh lebih dari 3 hari berturut-turut." }
// Output: { canTakeLeave: true, reason: "Cuti pribadi dapat diambil." }