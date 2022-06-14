class Post{
    static home = (req, res)=> { 
        res.render("home")
    }
    static add = (req, res)=> { 
        res.render("add")
    }
    static single = (req, res)=> { 
        res.render("single")
    }
    static edit =  (req, res)=> { 
        res.render("edit")
    }
}
module.exports = Post
