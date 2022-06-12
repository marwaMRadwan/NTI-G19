//http http2 https
const https = require("https")
const url = "https://jsonplaceholder.typicode.com/posts"
const req = https.request(url, (res)=>{
    let allData = ""
    res.on("data", (myData)=>{
        allData+= myData.toString()
    })
    res.on("end", ()=>{
        console.log(JSON.parse(allData))
    })
})
req.on("error", (err)=> console.log(`error ${err}`))
req.end()