// tukar nilai data dari variabel yang tersedia

function test () {
    var a = 1;
    var b = 2;
    console.log('a awal = ', a)
    console.log('b awal = ', b)

    // coding
    // gimana caranya supaya nilai b jadi nilai a
    // dan nilai a menjadi nilai b
    // tanpa menambah variabel baru

    a -= b; // a = -1
    b += a; // b = 2 + (-1) = 1
    // a = 2 ???
    a = b - a; // a = 2 | a = 1 - (-1) = 2

    console.log('a final = ', a)
    console.log('b final = ', b)
}

test();
