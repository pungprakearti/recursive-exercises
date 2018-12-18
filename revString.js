/* Return a copy of a string, reversed */

function revString(str, out = '', i = 1) {
  //
  //base case - if not at end of string
  if (str.length - i !== 0) {
    //
    //concat end of string to output
    out += str[str.length - i];

    //progress
    revString(str, out, i + 1);

    //end of string, return output
  } else {
    out += str[0];
    return out;
  }
}
