function findSecondSmallest(arr) {
  if (arr.length < 2) return null;

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

const arr = [10, 20, 4, 45, 99];
console.log(findSecondSmallest(arr)); // 10
