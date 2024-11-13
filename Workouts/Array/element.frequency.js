function elementFrequency(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (frequency[value]) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }

  return frequency;
}

const arr = [1, 2, 2, 3, 3, 3, 4];
console.log(elementFrequency(arr)); // { '1': 1, '2': 2, '3': 3, '4': 1 }
