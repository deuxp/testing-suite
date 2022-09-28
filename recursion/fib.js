function fib(n) {
  let a = 1; //this is what is giving the correct answer
  let b = 1;
  let c = 2;

  if (n === 1 || n === 2) return 1;
  if (n === 3) return c;
  // this function should sum a and b to c and then shift nums
  function help(count) {
    // base - when head > h return result
    if (count === n) return;
    // mutate the result
    c = a + b;
    a = b;
    b = c;
    help(count + 1);
  }
  help(a);
  return a;
}

// 1, 1, 2, 3, 5,
// console.log(fib(4)); // 3
// fib(10); // 55
// console.log(fib(10));
// // fib(28) // 317811
// console.log(fib(28));
// // fib(35) // 9227465
// console.log(fib(35));

/* -------------------------------------------------------------------------- */
/*                              The Real Solution                             */
/* -------------------------------------------------------------------------- */

function realFib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // 55

// remember that you can count backwards and have more than one recursive call.. here we have 2, which by subtracting one and two gives the two previous numbers that can be summed.. and you only go to two because they are the first 2 nums
