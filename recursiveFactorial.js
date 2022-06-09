function factorial(n) {
  // base case
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1); // n
}

// Big-O = O(n)

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
