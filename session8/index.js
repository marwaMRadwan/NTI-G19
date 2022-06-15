// npm init --y   npm i mongodb
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const dbURL = "mongodb://localhost:27017"
const dbName = "g19"
const data = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
    ]
MongoClient.connect(dbURL, {}, (error, client)=>{
    if(error) return console.log("unable to connect")

    const db = client.db(dbName)
    // db.collection("user").insertOne(
    //     {name:"omar"},
    //     (err, result)=>{
    //         if(err) return console.log(err)
    //         console.log(result)
    //     }
    // )
    //db.collection("user").insertOne(
    // {name:"marwa", age:37}
    //)
    //.then(res=> console.log(res))
    //.catch((err)=> console.log(err))
    // db.collection("image")
    // .insertMany(data)
    // .then(res=> {
    //     console.log("data inserted")
    //     client.close()
    // })
    // .catch((e)=> {
    //     console.log(e)
    //     client.close()
    // })
    // db.collection("image")
    // .find({id:9})
    // .toArray((err, res)=>{
    //     if(err) return console.log(err)
    //     console.log(res)
    //     client.close()
    // })
    // db.collection("image").findOne({_id:new ObjectId("62a9b97295b6dd2c17bf8c19")})
    // .then(res=>{
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=> {
    //     console.log(e)
    //     client.close()
    // })
    db.collection("image")
    .deleteOne({_id:new ObjectId("62a9b97295b6dd2c17bf8c19")})
    .then(r=> {
        console.log(r)
        client.close()
    })
    .catch(e=>{
        console.log(e)
        client.close()
    })
 })
