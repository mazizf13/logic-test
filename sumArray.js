// Buatlah sebuah fungsi bernama sumArray yang menerima sebuah array berisi angka-angka 
// dan mengembalikan jumlah dari semua angka dalam array tersebut.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
