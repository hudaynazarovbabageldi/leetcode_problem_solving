/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  let map = new Map();
  for (let el of nums) {
    map.set(el, (map.get(el) ?? 0) + 1);
  }

  for (let num of nums) {
    if (map.get(num) === 1 && num % 2 === 0) {
      return num;
    }
  }

  return -1;
};

console.log(firstUniqueEven([8, 2]));
