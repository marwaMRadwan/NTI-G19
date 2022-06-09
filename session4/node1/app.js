// console.log("hello")
//modules (build-in module, npm modules, my own module)
// const myMod = require("./myMod")
// myMod()
// myMod.fun()
// myMod.a()

//build-in
// const fs = require("fs")
// fs.writeFileSync("test.txt", "hello")
// fs.renameSync("x.txt", "b.txt")
// console.log(__dirname);
// console.log(__filename);

// try{
//     fs.renameSync("c.txt", "x.txt")
// }
// catch(e){
//     console.log(e.message)
// }
//npm js
//npm init --y
const validator = require("validator")
// console.log(validator.isEmail('foobar.com'))
console.log(validator.isDivisibleBy("50", 3))











