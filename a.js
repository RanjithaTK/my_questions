let a = "2222"
function count(a) {
  let b = a.split("")
  let count = 0
  for (let i = 0; i < b.length; i++) {
    if (b[i] == 1) {
      count++
    }
  }
  return count
}
console.log(count(a))
