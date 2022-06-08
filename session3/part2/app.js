//chain
// function a2(){
//     console.log("hello")
// }

// const a1= ()=>{
//     return a2
// }
//self invoke function
// (function () {
//     console.log("hello")
// })()

// a1()()
// let a = a1()
// a()


// const x = () => {

// }
// const y = function(){
//     console.log("test")
// }
// console.log(y)
//clouser
// let z = 9
// const calc = (a, b) => {
//     return {
//         a,
//         b,
//         add() { return a+b },
//         sub() { return a-b }, 
//         div() { return a/b } ,
//         mul() { return a*b } 
//     }
// }
// const d1 = calc( 5, 3 )
// const d2 = calc( 10, 12 )
// d1.add()
// d2.add()
// d1.a

//callback
// const x = (val, cb) =>{
//     if(typeof val == "number") cb("number", null)  //result: number, error: null
//     else cb(null, "not a number") // result: null, error:"not a number"
//     console.log("b3d el cond.")
// }
// x(5, (reult, err)=>{
//     console.log(reult, err)
// })
// const x1 = () =>{
//     return ()=>{
//         return ()=>{
//             return 'a'
//         }
//     }
// }
// x1()


// let a
// console.log(1)
// setTimeout(()=> a=3, 1000)
// setTimeout(()=> console.log(3), 500)
// console.log(a)

// const myPromise = (val) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof val=="number" ? resolve(val*3) : reject("not a number")
//         }, 2000)
//     })
// }

// console.log(myPromise(5))
// myPromise()
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// console.log("test")

function apiData(cb){
    const data = fetch('https://jsonplaceholder.typicode.com/users')
    data
    .then(res=> {
        jsonData = res.json()
        jsonData
        .then(result=> cb(result))
        .catch(ee=> cb(ee))
    })
    .catch(e=> cb(e))
}

apiData(res=> console.log(res))

