function fibonacci(n) {
  // base case
  if (n < 2) {
    return n;
  }
  // recall the function passing in the smaller values
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));
