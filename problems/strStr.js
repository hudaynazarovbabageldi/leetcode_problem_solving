/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let hP = 0;
  let nP = 0;
  let str = "";

  if (haystack.length < needle.length) {
    return -1;
  }

  while (hP < haystack.length || nP < needle.length) {
    if (haystack[hP] === needle[nP]) {
      str = str + haystack[hP];
      hP++;
      nP++;
    } else {
      hP++;
    }
  }

  console.log(str);

  if (needle.length !== str.length) {
    return -1;
  }
  return hP - needle.length - 1;
};

console.log("hey: ", strStr("sadbutsad", "sad"));
