// function LetterCountI(str) {
//   return (
//     ((str = str
//       .split(" ")
//       .map(function (word) {
//         var letters = word.split("").reduce(function (map, letter) {
//           map[letter] = map.hasOwnProperty(letter) ? map[letter] + 1 : 1
//           return map
//         }, {}) // map of letters to number of occurrences in the word

//         return {
//           word: word,
//           count: Object.keys(letters).filter(function (letter) {
//             return letters[letter] > 1
//           }).length, // number of repeated letters
//         }
//       })
//       .sort(function (a, b) {
//         // Sort words by number of repeated letters
//         return b.count - a.count
//       })
//       .shift()) &&
//       str.count &&
//       str.word) ||
//     -1
//   ) // return first word with maximum repeated letters or -1
// }

// console.log(LetterCountI("Today, is the greatest day ever!")) // => greatest
function SearchingChallenge(str) {
  return (
    ((str = str
      .split(" ")
      .map(function (word) {
        var letters = word.split("").reduce(function (map, letter) {
          map[letter] = map.hasOwnProperty(letter) ? map[letter] + 1 : 1
          return map
        }, {}) // map of letters to number of occurrences in the word

        return {
          word: word,
          count: Object.keys(letters).filter(function (letter) {
            return letters[letter] > 1
          }).length, // number of repeated letters
        }
      })
      .sort(function (a, b) {
        // Sort words by number of repeated letters
        return b.count - a.count
      })
      .shift()) &&
      str.count &&
      str.word) ||
    -1
  ) // return first word with maximum repeated letters or -1
}

// keep this function call here
console.log(SearchingChallenge("Today, is the greatest day ever!"))
