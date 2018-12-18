/* Return a copy of a string, reversed */

function revString(str, out = '', i = 1) {
  if (str.length - i !== 0) {
    out += str[str.length - i];
    revString(str, out, i + 1);
  } else {
    out += str[0];
    return out;
  }
}
