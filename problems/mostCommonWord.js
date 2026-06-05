/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let paragraphArr = paragraph.split(" ");
};

console.log(
  "test1: ",
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ]),
);

console.log("test2: ", mostCommonWord("a.", []));
