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
// const validator = require("validator")
// console.log(validator.isEmail('foobar.com'))
// console.log(validator.isDivisibleBy("50", 3))

const chalk = require("chalk")
console.log(chalk.red('Hello world!'));
const nodefetch = require("node-fetch");
const apiReq= async() =>{
    const response = await nodefetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    const r = await response.json()
    console.log(r)
}
apiReq()











