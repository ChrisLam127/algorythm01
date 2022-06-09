function primeNumber(n) {
  // a prime number is a number > 1 and is not a product of two smaller numbers
  if (n < 2) {
    return false; // 1
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      // n
      return false;
    }
  }
  return true; // 1
}

// Big-O = O(n)

console.log(primeNumber(1)); // false
console.log(primeNumber(4)); // false
console.log(primeNumber(5)); // true
