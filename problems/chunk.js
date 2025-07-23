/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i + size));
    i += size;
  }
  return res;
};

console.log(chunk([1, 2, 3, 4, 55, 333], 2));
