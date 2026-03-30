/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let insertIndx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertIndx] = nums[i];
      insertIndx++;
    }
  }

  while (insertIndx < nums.length) {
    nums[insertIndx] = 0;
    insertIndx++;
  }

  return nums;
};
