// we need to loop thorugh all the element of the array starting from the first one at index 0
// at each element we compare with 't', if it matches we return the index of the element
//  if at the end of the loop there no match, we return -1

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i; //
    }
  }

  return -1;
}

// Big-O -> O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // t = 10 -> should return 2;
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // t = 6 -> should return 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // t = 20 -> should return -1
console.log(linearSearch([-5, 2, 10, 4, 6], -5)); // t = -5 -> should return 0
