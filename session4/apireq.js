const mainApiLink = "https://jsonplaceholder.typicode.com/"
const apis = [
    "posts",
    "users",
    "todos"
]
const btnWrap = document.querySelector("#btnWrap")
const createMyOwnElement = (parent, ele, text, classes=null) =>{
    const myEle = document.createElement(ele)
    if(text) myEle.textContent = text
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    return myEle
}
const apiReq = async(apiLink, cb)=>{
    try{
        const data = await (await fetch(apiLink)).json()
        cb(data, null)
    }
    catch(e){
        cb(null, e.message)
    }
}
apis.forEach(el=>{
    let apiBtn = createMyOwnElement(btnWrap, "button", el)
    apiBtn.addEventListener("click", (e)=>{
        apiReq(`${mainApiLink}${el}`, (res, err)=>{
            if(err) window.location.href="err404.html"
            console.log(res)
        })
    })
})
