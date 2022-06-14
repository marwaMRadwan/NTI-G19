class Post{
    static home = (req, res)=> { 
        res.render("home", {
            pageTitle:"all posts"
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
