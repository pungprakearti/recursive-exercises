/* Given an object, return an array of all the values in the object that are strings */

function gatherStrings(obj, out = []) {
  //
  //there isn't an explicit base case. Instead the loop is the base case and the
  //  progress is getting to a non nested object.
  for (let key in obj) {
    //
    //if value is an object, recurse
    if (typeof obj[key] === 'object') gatherStrings(obj[key], out);

    //else if value is a string, push to output
    if (typeof obj[key] === 'string') out.push(obj[key]);
  }
  return out;
}

// let nestedObj = {
//   firstName: 'Lester',
//   favoriteNumber: 22,
//   moreData: {
//     lastName: 'Testowitz'
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100
//     },
//     favoriteString: 'nice!'
//   }
// };

// console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "nice!"];
