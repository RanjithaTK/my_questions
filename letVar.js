function letVar() {
  {
    let l = "let"
    var v = "var"
  }
  //   console.log(l) //not defined
  console.log(v) // being functional scope printed as var
}
letVar()

// if we need to get both var and let to be undefined then create a functn inside fn letVar

function letVar() {
  function f123() {
    {
      let l = "let"
      var v = "var"
    }
  }
  //   console.log(l) //not defined
  console.log(v) // being functional scope printed as var
}
letVar()
