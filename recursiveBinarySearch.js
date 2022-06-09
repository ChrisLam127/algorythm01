function recursiveBinarySearch(arr, low, high, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return recursiveBinarySearch(arr, low, mid - 1, target);
  } else if (arr[mid] < target) {
    return recursiveBinarySearch(arr, mid + 1, high, target);
  } else {
    return "Target Not Found!";
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 0, 4, 20)); // t = 20 -> should return -1
