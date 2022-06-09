//async await

// async function x(){}
// const b = async function(){}
const createMyOwnElement = (parent, ele, text, classes) =>{
    const myEle = document.createElement(ele)
    if(text) myEle.textContent = text
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    return myEle
}
const apiData = async(cb) =>{
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
        const jsonData = await data.json()
        cb(jsonData, false)
        // return jsonData
    }
    catch(e){
        cb(false, e.message)
        // return e
    }
}
apiData((res, err)=>{
    if(res) console.log(res)
    else console.log(err)
})
