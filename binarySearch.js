/* Given an array (not a linked list!) of sorted numbers and a value,
return the index of that value. If not found, return -1. This algorithm
should run in O(log(N)) time (where N is the number of elements in the array) */

function binarySearch(arr, val, start = 0, end = -1) {
  if (val > arr.length - 1 || val < arr[0]) return -1;

  //need to change this to checking positions based on start and end, not arr.length
  if (arr.length === 2) {
    if (arr[start] === val) return start;
    else return end;
  }
  if (end === -1) end = arr.length - 1;

  //check end of first half > value
  //winning half gets recursed with new start and end variables
  let half = Math.floor((end - start) / 2);
  if (arr[half] > val) {
    end = half;
  } else {
    start = half + 1;
  }
  return binarySearch(arr, val, start, end);
}

binarySearch([1, 2, 3, 4], 1); // 0
binarySearch([1, 2, 3, 4], 3); // 2
binarySearch([1, 2, 3, 4], 5); // -1
