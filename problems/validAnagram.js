/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let s1 = s.split("");
  let t1 = t.split("");

  s1 = s1.sort();
  t1 = t1.sort();

  const s2 = s1.join("");
  const t2 = t1.join("");

  return s2 === t2;
};

console.log("isAnagram: ", isAnagram("anagram", "nagaram"));

// const arr = ["a", "b", "c"];
// const arr2 = ["a", "b", "c"];

// console.log(arr.join(""));
