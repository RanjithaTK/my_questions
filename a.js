// count the no of 1 s
let a = "11011010100010101001" //toString()
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

// let a = 00110110001
// function count2(a) {
//   let count = 0
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === 1) {
//       count++
//     }
//   }
//   //   return count
// }
// console.log(count2(a))
// console.log(a[i])
