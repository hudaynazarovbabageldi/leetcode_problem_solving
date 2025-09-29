/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString();

  let reversedStr = str.split("").reverse().join("");

  let reversedNum = parseInt(reversedStr);

  if (reversedNum < -(2 ** 31) || reversedNum > 2 ** 31 - 1) return 0;

  if (reversedNum < 0) {
    reversedNum = -reversedNum;
  }
  return reversedNum;
};
