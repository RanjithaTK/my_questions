// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function (strs) {
  let obj = {}
  for (let str of strs) {
    //   console.log(str) //eat,tea,tan,ate,....
    let letters = str.split("").sort().join("") //aet,aet,ant,aet,ant,abt
    // console.log(letters)
    // console.log(obj[letters])
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str])
  }
  return Object.values(obj)
}
console.log(groupAnagrams(strs))
