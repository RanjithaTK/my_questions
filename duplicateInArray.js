let a = [1, 2, 3, 4, 5, 4, 3, 2, 5, 6, 9]
let b = []
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    //generally if no such number present returns index=-1
    b.push(a[i])
  }
}
console.log(b)
// console.log(b)
