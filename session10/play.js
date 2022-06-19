const bcryptjs = require("bcryptjs")
const x = async()=>{
    const test = await bcryptjs.hash("pass", 8)
    console.log(test)
    const test1 = await bcryptjs.compare("pass", test)
    console.log(test1)
}
x()
x()
x()


/*
123 => 987
987 => 101
*/