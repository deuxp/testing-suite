// accepts a sorted array and a target
// left pointer at start
// right pointer at the end
// loop while the left is before the right counter
// create a pointer in the middle
// if you find it return the index
// if the value is greater, move the left pointer up
// if the value is lower, move the right pointer down
// if the value is never found return -1

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    // base case
    if (target === arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle;
    }
    if (target > arr[middle]) {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
