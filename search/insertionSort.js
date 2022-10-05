const { swap } = require("../helpers");
/*
 * 1. Pick the second element in the array
 * 2. Compare the second element with the one before it
 * 3. Swap if necessary
 * 4. Continue to the next elemenet and if it is in the incorrect order,
 * 5. iterate throught the sordted portion (left side) to place the element in the correct place.
 * 6. Repeat until sorted.
 * */

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, i, j);
      } else {
        break;
      }
    }
  }
  return arr;
};

// function insertionSortB(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (arr[j - 1] > arr[j]) {
//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([0, 5, 1, 8, 3]));

//        v             i
// [0, 5, 1, 8, 3]
//  ^               j = i - 1
// is arr[j] more than arr[i] ?
// no
// no action & decrement j to the end
// exhaust the loop
// increment i

// yes
// swap and break
/**
 * what happens when you get to the end and
 */
// function insertionSortA(arr) {
//   let currentVal;
//   for (let i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     console.log(j);
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

let a = [2, 1, 9, 76, 4];

console.log(insertionSort(a));
// console.log(insertionSortA(a));
// console.log(insertionSortB(a));
