/* function that returns true/false depending on whether passed-in string is a palindrome */

function isPalindrome(str, i = 1) {
  //
  //base case - if pointers are on the same index or left is greater than right
  if (i - 1 === str.length - i || i > str.length - i) return true;

  //if the letters don't match
  if (str[i - 1] !== str[str.length - i]) return false;

  //progress
  return isPalindrome(str, i + 1);
}
