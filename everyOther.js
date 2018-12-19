/* function that prints every other character of a string */

function everyOther(str, out = '', i = 0) {
  //
  //base case - if i is the length of the string return output
  if (i === str.length) return out;

  //if i is even add it to the output
  if (i % 2 === 0) out += str[i];

  //progress
  return everyOther(str, out, i + 1);
}
