function fibonacci(n) {
  const fib = [0, 1]; // 1
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // n - 2
  }

  return fib; // 1
}

// Big-O = O(n) Linear

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
