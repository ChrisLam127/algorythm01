// n is the power of 2 if 2**x equal n
// x has to be less than n
// x has to be an interger ie a positive number
// 0 <= x < n
function isPowerOfTwo(n) {
  if (n < 0) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (2 ** i == n) {
      return true;
    }
  }
  return false;
}

console.log(isPowerOfTwo(-4)); // true
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // ture
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(8)); // false
