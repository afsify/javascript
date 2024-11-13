function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(isSorted(arr1)); // Output: true

const arr2 = [1, 3, 2, 4, 5];
console.log(isSorted(arr2)); // Output: false
