/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

/**
 * Object doesn't work, because type coersion
 */

// var wordPattern = function (pattern, s) {
//   let words = s.split(" ");

//   if (pattern.length !== words.length) {
//     return false;
//   }

//   const charToWord = {};
//   const wordToChar = {};
//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     const word = words[i];

//     if (charToWord[char] && charToWord[char] !== word) {
//       return false;
//     }

//     if (wordToChar[word] && wordToChar[word] !== char) {
//       return false;
//     }

//     wordToChar[word] = char;
//     charToWord[char] = word;
//   }

//   return true;
// };

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const word = words[i];

    if (charToWord.has(ch) && charToWord.get(ch) !== word) {
      return false;
    }

    if (wordToChar.has(word) && wordToChar.get(word) !== ch) {
      return false;
    }

    charToWord.set(ch, word);
    wordToChar.set(word, ch);
  }

  return true;
};

console.log(
  "wordPattern: ",
  wordPattern("abba", "dog constructor constructor dog")
);
