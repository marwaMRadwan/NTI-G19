// const bcryptjs = require("bcryptjs")
// const x = async()=>{
//     const test = await bcryptjs.hash("pass", 8)
//     console.log(test)
//     const test1 = await bcryptjs.compare("pass", test)
//     console.log(test1)
// }
// x()
// x()
// x()


/*
123 => 987
987 => 101
*/

const jwt = require('jsonwebtoken')
const _id = "62aee82c2158db7ece7b0198"
const jwtKEY = "G19"

var token = jwt.sign({ _id }, jwtKEY);
console.log(token)

// Authorization header
const decoded = jwt.verify(token, jwtKEY)
console.log(decoded)



