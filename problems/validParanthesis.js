/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let ch of s) {
    if (ch === "[" || ch === "(" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return true;
};

console.log("isValid: ", isValid("([])"));
