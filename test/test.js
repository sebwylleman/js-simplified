// function printVariable(variable) {
//   console.log(variable)
//}
function greet(name, callback) {
  callback(`Hello ${name}`)
}

greet("Seb", function (variable) {
  // using anonymous function declaration
  console.log(variable)
})
