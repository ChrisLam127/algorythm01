// What is factorial
// n > 0

function factorial(n) {
  // I need to find the product of all the positive number less or equal to n
  let result = 1; // 1
  for (let i = 2; i <= n; i++) {
    result = result * i; // n - 1
  }

  return result; // 1
}

// Big-O = O(n)
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
console.log(factorial(20)); // 2432902008176640000
