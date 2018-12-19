/* Given an array (not a linked list!) of sorted numbers and a value,
return the index of that value. If not found, return -1. This algorithm
should run in O(log(N)) time (where N is the number of elements in the array) */

function binarySearch(arr, val, start = 0, end = -1) {
  //
  //If val outside of bounds, fail fast
  if (val > arr.length - 1 || val < arr[0]) return -1;

  //if the start and end are next to each other,
  //  get the index that matches the value
  if (end - start === 1) {
    if (arr[start] === val) return start;
    else return end;
  }

  //If end is -1, assign it to the end of the current array
  if (end === -1) end = arr.length - 1;

  //check if the last value in the first half is greater than the value
  let half = Math.floor((end - start) / 2);

  //winning half gets recursed with new start and end variables
  if (arr[half] > val) {
    end = half;
  } else {
    start = half + 1;
  }
  return binarySearch(arr, val, start, end);
}
