// run in the debugger to see a
// simple example of how a call stack pushes and pops
// once a resolution is reached for each function in the stack

function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  // returns random index
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!!!");
}

// wakeUp();

/* -------------------------------------------------------------------------- */
/*                          returning a value                                 */
/* -------------------------------------------------------------------------- */

const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// sumRange(3);

/* -------------------------------------------------------------------------- */
/*                       Factorial: the classic example                       */
/* -------------------------------------------------------------------------- */
// The product of all positive integers
// less than or equal to a given positive integer

const factorial = num => {
  if (num === 1) return num;
  return num * factorial(num - 1);
};
// console.log(factorial(5));

/* -------------------------------------------------------------------------- */
/*                  Design Pattern: Helper Function Recursion                 */
/* -------------------------------------------------------------------------- */

const collectOddValues = arr => {
  let result = [];

  // this mutates the result array;
  function helper(helperInput) {
    // base case -- ends after the array is empty
    if (helperInput.length === 0) {
      return;
    }
    // do something and push it to the outer 'result'
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // makes a sub array excluding the first item
    helper(helperInput.slice(1));
  }
  // call the helper recursive mutator function
  helper(arr);
  return result;
};

// console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

/* -------------------------------------------------------------------------- */
/*                           Pure Recursion Example                           */
/* -------------------------------------------------------------------------- */

const collectOddValuesPR = arr => {
  // this is so not to mutate the original array
  let newArr = [];
  // base case
  if (arr.length === 0) {
    return newArr;
  }
  // the 'do something'
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // new array is replaced by a recursive call that passes in a subarray excluding the first item
  // which is concatenated to the
  newArr = newArr.concat(collectOddValuesPR(arr.slice(1)));
  // returns the new array after all recursions are resolved
  return newArr;
};
