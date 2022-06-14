const home = (req, res)=> { 
    res.render("home")
}
const add = (req, res)=> { 
    res.render("add")
}
const single = (req, res)=> { 
    res.render("single")
}
const edit =  (req, res)=> { 
    res.render("edit")
}
module.exports = { home, add, single, edit }
