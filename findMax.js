// Buatlah sebuah fungsi bernama findMax yang menerima sebuah array berisi angka-angka 
// dan mengembalikan angka terbesar dari array tersebut.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); // Output: 5
