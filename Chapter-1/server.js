
//Common Core Modules
const os = require("os")
const path = require("path")

const {add, subtarct, divide, multiply} = require("./math.js");

console.log(add(2,5))
console.log(subtarct(56,34))
console.log(multiply(5,6))
console.log(divide(6,3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))