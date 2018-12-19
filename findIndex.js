/* Given an array and a string, return the index of that string in the array (or -1 if not present) */

function findIndex(arr, key, i = 0) {
  //
  //base case - if index is greater than length of array, failed slowly
  if (i > arr.length) return -1;

  //if match, return index
  if (arr[i] === key) return i;

  //progress
  return findIndex(arr, key, i + 1);
}
