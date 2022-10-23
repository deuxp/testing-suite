const countUniqueValues = arr => {
  if (arr === []) return 0;
  let i = 0;
  let j = 1;
  let count = 1;

  while (j !== arr.length) {
    const left = arr[i];
    const right = arr[j];

    if (left !== right) count++;
    i++;
    j++;
  }
  return count;
};

const countUniqueValues2 = arr => {
  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
};
// const arr5 = [1, 1, 1, 1, 3, 3, 3, 4, 4, 7, 7, 7, 7, 7, 5]; // 5
// const arr2 = [1, 1, 1, 1, 1, 2]; // 2
// const arr1 = [1]; // 1
// const arr2again = [1, 2]; // 2

// log(countUniqueValues2(arr2));
// log(countUniqueValues2(arr5));
// log(countUniqueValues2(arr1));
// log(countUniqueValues2(arr2again));
