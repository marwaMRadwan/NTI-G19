const deal = require("./dealwithJson.controller")
class Post{
    static home = (req, res)=> { 
        const data = deal.readDataFromJSON("models/posts.json")
        // res.send(data)
        res.render("home", {
            pageTitle:"all posts",
            data,
            isEmpty: !data.length
        })
    }
    static add = (req, res)=> { 
        res.render("add", {
            pageTitle:"Add Post"
        })
    }
    static single = (req, res)=> { 
        // res.send(req.params)
        const postId = req.params.id
        const data = deal.readDataFromJSON("models/posts.json")
        const postData = data.find(p=> p.id == postId)
        res.render("single", {
            pageTitle:"single Post",
            postData
        })
    }
    static edit =  (req, res)=> { 
        res.render("edit", {
            pageTitle:"Edit Post"
        })
    }
}
module.exports = Post
