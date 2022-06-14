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
        res.render("single", {
            pageTitle:"single Post"
        })
    }
    static edit =  (req, res)=> { 
        res.render("edit", {
            pageTitle:"Edit Post"
        })
    }
}
module.exports = Post
