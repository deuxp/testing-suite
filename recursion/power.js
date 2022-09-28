function power(base, exponent) {
  // base case if exponent === 1
  if (exponent === 0) {
    return 1;
  }
  // recursive call
  return base * power(base, exponent - 1);
}

// console.log(power(2, 2));
console.log(power(2, 10));
console.log(power(4, 4));
