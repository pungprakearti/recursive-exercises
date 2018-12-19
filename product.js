/* function that finds the product of an array of numbers */

function product(arr) {
  //
  //base case - if array length is 0 return 1
  if (arr.length === 0) return 1;
  //
  //else pop off from the end and multiply that to the others
  else {
    let pop = arr.pop();

    //progress
    return (pop *= product(arr));
  }
}
