/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split(""); // strings not mutable;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }

    while (left < right && !vowels.has(arr[right])) {
      right--;
    }

    // swapping
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;

    console.log(arr);
  }

  return arr.join("");
};

console.log("hey: ", reverseVowels("leetcode"));
