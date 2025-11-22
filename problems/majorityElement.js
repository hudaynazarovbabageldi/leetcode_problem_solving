/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  for (let el of nums) {
    if (map[el]) {
      map[el] += 1;
    } else {
      map[el] = 1;
    }
  }
  // Select first element with max count
  let majorityCount = 0;
  let majorityElement = nums[0];
  for (let el in map) {
    if (map[el] > majorityCount) {
      majorityCount = map[el];
      majorityElement = parseInt(el);
    }
  }

  return majorityElement;
  //   return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log("hey: ", majorityElement(nums));
