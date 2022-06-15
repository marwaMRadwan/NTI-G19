const dbConnect = (cb) =>{
    const {MongoClient} = require("mongodb")
    const dbURL = "mongodb://localhost:27017"
    const dbName = "postG19"
    MongoClient.connect(dbURL, {}, (error, client)=>{
        if(error) return console.log("unable to connect")
        const db = client.db(dbName)
        cb(db, client)
    })
}
module.exports = dbConnect