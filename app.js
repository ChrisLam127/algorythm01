// Big O is expressed in term of input size
// It does not focus on the minor details
// Big O is an expession of the worst case of an algorythm

function summation(n) {
  let sum = 0; // This runs once 1
  for (let i = 1; i <= n; i++) {
    sum += i; // The loop run n number of time n
  }

  return sum; // The return runs once  1
}

// So big O = 1 + n + 1 = n + 2 and can be reduced to n
// So our function has a time complexity of O(n) Linear time complexity.
// The time complexity of a loop is always Linear

// Sorting array has a O(1)
