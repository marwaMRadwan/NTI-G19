const test = () =>{
    console.log("test")
}
const fun = () =>{
    console.log("hasnen")
    console.log(__filename);
}
// module.exports=test
module.exports = {
    a: test, // test:test
    fun //fun:fun
}