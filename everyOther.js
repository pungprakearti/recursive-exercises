/* Write a function that prints every other character of a string */

function everyOther(str, out = '', i = 0) {
  if (i === str.length) return out;
  if (i % 2 === 0) out += str[i];
  return everyOther(str, out, i + 1);
}
