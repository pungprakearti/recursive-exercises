/* Given an object, return an array of all the values in the object that are strings */

function gatherStrings(obj, i = 0, out = []) {
  // let keys = Object.keys(obj);
  // if (keys.length === i) return out;
  // if (typeof obj[keys[i]] === 'object')
}

let nestedObj = {
  firstName: 'Lester',
  favoriteNumber: 22,
  moreData: {
    lastName: 'Testowitz'
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100
    },
    favoriteString: 'nice!'
  }
};

console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "nice!"];
