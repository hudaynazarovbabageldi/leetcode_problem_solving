/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(common) !== 0) {
      common = common.slice(0, common.length - 1);
      if (common === "") return "";
    }
  }

  return common;
};

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
