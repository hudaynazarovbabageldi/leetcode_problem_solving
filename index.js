/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = digits.join("");

  num = Number(num) + 1;
  return String(num).split("");
};

console.log("hey: ", plusOne([1, 2, 3]));
console.log("hey1: ", plusOne([4, 3, 2, 1]));
console.log("hey2: ", plusOne([9]));
