// x=5  // => var x = 5

// let c = 5
// const x = 10

// if(true){
//     let x = 5
// }
// console.log(x);
// console.log(a);
// var a = 7

// if switch 
// let msg = ""
// const monNumber = +prompt("Please enter a month number")
// const monNumber = Number(prompt("Please enter a month number"))
// const monNumber = parseInt(prompt("Please enter a month number"))
// const monNumber = prompt("Please enter a month number")*1.0
// switch(monNumber){ // === strict condition
//     case 1: msg="month is jan"; break; 
//     case 2: msg="month is feb"; break; 
//     case 3: msg="month is mar"; break; 
//     case 4: msg="month is apr"; break; 
//     case 5: msg="month is may"; break; 
//     case 6: msg="month is jun"; break; 
//     case 7: msg="month is jul"; break; 
//     case 8: msg="month is aug"; break; 
//     case 9: msg="month is sep"; break; 
//     case 10: msg="month is oct"; break; 
//     case 11: msg="month is nov"; break; 
//     case 12: msg="month is dec"; break; 
//     default: msg="error in month number"
// }
//console.log(msg);
// const months = ['jan', 'feb', 'mar']
// console.log(months[monNumber-1])
// for(i=0; i<months.length; i++){
//     if(monNumber==i+1) console.log(`month is ${months[i]}`)
// }

// months.forEach((month, index)=>{
//     console.log(`${index}=>${month}`)
// })
// find findIndex filter
// result = months.filter( function(mon, ind){
//     return ind==monNumber-1
// })
// console.log(result)
// f1()
// //this 
// function f1(){
//     console.log('f1');
// }
// var f2 = function(){
//     console.log('f2');
// }
// const f3 = () =>{
//     console.log('f3');
//     console.log(this)
// }
// f3()

/* get user birth year, get current year, get user age */
// const getDataFromUser = (msg, DataType="") =>{
//     DataType=="number"? result = +prompt(msg): result=prompt(msg)
//     return result    
// }

// let x = getDataFromUser("your name")
// let y = getDataFromUser("your salary", "number")
// console.log(typeof x);
// console.log(typeof y);

// c k f
//32
// 32 c - 5f - 3k
const getDataFromUser = (msg, DataType="") =>{
    DataType=="number"? result = +prompt(msg): result=prompt(msg)
    return result    
}
// c=> f    c=> k   k=>c  k=> f    f=> c  f=>k
const cTof = (tempVal) => tempVal*2
const cTok = (tempVal) => tempVal*3
const kTof = (tempVal) => tempVal*4
const kToc = (tempVal) => tempVal*5
const fToc = (tempVal) => tempVal*6
const fTok = (tempVal) => tempVal*7
const types = ['k', 'c', 'f']
const runner = () =>{
    let tempType
    do{
        tempType = getDataFromUser("please enter your type")
    }while (!types.includes(tempType));
    let tempVal = getDataFromUser("please enter value", "number")
    switch(tempType){
        case "c":
            console.log(`c = ${tempVal} - f = ${cTof(tempVal)} - k = ${cTok(tempVal)}`)
            break;
        case "f":
            console.log(`f = ${tempVal} - f = ${fToc(tempVal)} - k = ${fTok(tempVal)}`)
            break;
    }
}

runner()

/*
array methods
math methods
string methods
objects
function 
array
variable
operators
if, switch, for, while , do
*/







