console.log(2 + "2") // 22
//adds up or concatenate number and string
console.log(2 - "2") //0
//- is a number operator so will operate only in numbers so converts "2" to 2
let number = [1, 2, 2, 3]
function dupe(number) {
  let arr = []
  for (let i = 0; i < number.length; i++) {
    if (arr.indexOf(number[i]) === -1) {
      arr.push(number[i])
    }
  }
  return arr
}
console.log(dupe(number))

//another way
// new set removes the duplicates and gives a new set with no duplicates,using spread operator it is able to convert to array
console.log([...new Set(number)])
