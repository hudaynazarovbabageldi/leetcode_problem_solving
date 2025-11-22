// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersection = function (nums1, nums2) {
//   let map = {};
//   let intersection = [];

//   for (let el of nums1) {
//     map[el] = true;
//   }

//   for (let el of nums2) {
//     if (map[el]) {
//       intersection.push(el);
//       map[el] = false;
//     }
//   }

//   return intersection;
// };

// console.log(intersection([1, 2, 2, 1], [2, 2]));

// console.log(intersection([9, 4, 9, 8, 4], [4, 9, 5]));

// Example 1:c;e

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Second Solution using set data structure

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (let el of nums2) {
    if (set1.has(el)) {
      result.add(el);
    }
  }

  return [...result];
};
