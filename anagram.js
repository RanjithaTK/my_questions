let s = "cat"
let c = "act"
function anagram(s, c) {
  return s.split("").sort().join === c.split("").sort().join
}
console.log(anagram(s,c))