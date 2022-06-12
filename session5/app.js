const dealWithJson = require("./controller/dealWithJSON")
const dataFile = 'database/users.json'
const uniqid = require("uniqid")
const addUser = (name, age, email)=>{
    const user = { id: uniqid(), name, age, email }
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    allUsers.push(user)
    dealWithJson.writeDataToJSON(dataFile, allUsers)
}
addUser("marwa", 37, "marwa@gmail.com")
/*
read all json
read single json
edit single
delete single
*/
