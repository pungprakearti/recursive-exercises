/* Given a list of words, return the length of the longest */
function longest(words, i = 0) {
  //
  //base case - if i is at the last position of the array return the last word length
  if (i === words.length - 1) return words[words.length - 1].length;

  //if the current word is longer than the next, replace it
  if (words[i].length > words[i + 1].length) words[i + 1] = words[i];

  //progress
  return longest(words, i + 1);
}
