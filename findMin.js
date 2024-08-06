// Buatlah sebuah fungsi bernama findMin yang menerima sebuah array berisi angka-angka 
// dan mengembalikan angka terkecil dalam array tersebut.

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numbers = [1, 2, 3, 0, 4, 5];
console.log(findMin(numbers)); // Output: 0
