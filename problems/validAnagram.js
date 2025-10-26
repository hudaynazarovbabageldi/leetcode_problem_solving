/// first O(n log n) solution
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   let s1 = s.split("");
//   let t1 = t.split("");

//   s1 = s1.sort();
//   t1 = t1.sort();

//   const s2 = s1.join("");
//   const t2 = t1.join("");

//   return s2 === t2;
// };

// console.log("isAnagram: ", isAnagram("anagram", "nagaram"));

// second O(n) solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};
