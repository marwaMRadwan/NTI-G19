const { trusted } = require("mongoose")
const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const loc = "images"
        cb(null, loc)
    },
    filename: function(req,file, cb){
        const myFileName = file.fieldname + Date.now() + path.extname(file.originalname)
        cb(null, myFileName)
    }
})

const upload = multer({
    storage: storage,
    limits:{ fileSize:200000000000},
    fileFilter: function(req, file, cb){
        if(path.extname(file.originalname)!= ".jpg") return cb(new Error(), null)
        cb(null, true)
    }
})
module.exports=upload