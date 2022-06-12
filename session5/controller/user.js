const dealWithJson = require("./dealWithJSON")
const dataFile = 'database/users.json'
const uniqid = require("uniqid")
const addUser = (name, age, email)=>{
    const user = { id: uniqid(), name, age, email }
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    allUsers.push(user)
    dealWithJson.writeDataToJSON(dataFile, allUsers)
}
const readAll = () =>{
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    allUsers.forEach(user=>{
        console.log(`userId : ${user.id} - name: ${user.name} - age:${user.age} - email: ${user.email}`)
        console.log("**********************************************************************************")
    })
}
const singleUser = (id) =>{
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    const user = allUsers.find(u=> u.id == id )
    if(!user) return console.log("user not found")
    console.log(`userId : ${user.id} - name: ${user.name} - age:${user.age} - email: ${user.email}`)

}
const deleteUser = (id) => {
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    const filteredUsers = allUsers.filter(user=> user.id != id)
    dealWithJson.writeDataToJSON(dataFile, filteredUsers)
}
const editUser = (id, newData)=>{
    const allUsers = dealWithJson.readDataFromJSON(dataFile)
    const userIndex =allUsers.findIndex(user=> user.id == id)
    for (const key in newData) {
            // console.log(`${key}: ${newData[key]}`);
            allUsers[userIndex][key] = newData[key]
    }
    dealWithJson.writeDataToJSON(dataFile, allUsers)
}
module.exports = { addUser, readAll, singleUser, deleteUser, editUser }