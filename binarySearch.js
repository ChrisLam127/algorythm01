// array is sorted [1,2,3,4,5,6]
// we need to run throught the array and compare each element with 't' target

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// Big-O -> O(log(n))
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // t = 10 -> should return 4;
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // t = 6 -> should return 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // t = 20 -> should return -1
