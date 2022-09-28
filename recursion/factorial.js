function factorial(num) {
  if (num === 0) return 1;
  // base
  if (num === 1) return num;
  // return call
  return num * factorial(num - 1);
}

console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
