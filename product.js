/* Write a function that finds the product of an array of numbers */

function product(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    let pop = arr.pop();
    return (pop *= product(arr));
  }
}
