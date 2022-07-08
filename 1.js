// function ArrayChallenge(arr) {
//   // code goes here
//   // var product =arr.reduce((a,b)=>a*b,1);
//   // return arr.map(p=>product/p)
//   return arr.map((_, i, a) => a.reduce((a, b, j) => a * (i === j || b), 1))
// }
// console.log(ArrayChallenge([1, 4, 3]))
var a = 1
var b = 0
while (a <= 3) {
  a++
  b += a * 2
  console.log(b)
}
