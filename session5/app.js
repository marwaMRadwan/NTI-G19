const user = require("./controller/user")
// user.singleUser("99hn349cl4b2f9e")
// user.editUser("99hn349cl4b2nf9e", {name:"a", age:"c"})
// console.log(process.argv)
// user.addUser(process.argv[2], 37, "marwa@gmail.com")
//yargs
const yargs = require('yargs')

yargs.command({
    command:"showAll",
    handler: function(){
        user.readAll()
    }
})

yargs.command({
    command:"addUser",
    builder:{
        name:{
            type:String,
            demandOption:true
        },
        email:{},
        age:{
            type:Number,
            min:21
        }
    },
    handler: function(argv){
        user.addUser(argv.name, argv.age, argv.email)
    }
})

yargs.argv














