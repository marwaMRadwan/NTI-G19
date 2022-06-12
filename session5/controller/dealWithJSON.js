const fs = require("fs")
const chalk = require("chalk")
const readDataFromJSON = (fileName) => {
    let data 
    try{
        data = JSON.parse(fs.readFileSync(fileName))
        if(!Array.isArray(data)) throw new Error("data not valid")
        console.log(chalk.green("data featched"))
    }
    catch(e){
        data = []
        console.log(chalk.red("data reseted"))
    }
    return data
}
const writeDataToJSON = (fileName, data) =>{
    try{
        if(!Array.isArray(data)) throw new Error("")
        fs.writeFileSync(fileName, JSON.stringify(data))
        console.log(chalk.green("data inserted"))
    }
    catch(e){
        console.log(chalk.red("invalid data"))
    }
}
module.exports = { readDataFromJSON, writeDataToJSON }