const user = require("./controller/user")
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
            //default:"marwa"
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
yargs.command({
    command: "single",
    builder:{
        id:{demandOption:true}
    },
    handler:function(argv){
        user.singleUser(argv.id)
    }
})
yargs.command({
    command: "edit",
    builder:{
        id:{demandOption:true},
        name:{},
        email:{},
        age:{}
    },
    handler:function(argv){
        const newData={}
        const heads = ["name", "email", "age"]
        heads.forEach(h=> {
            if(argv[h]) newData[h]= argv[h]
        })
        user.editUser(argv.id, newData)
    }
})
yargs.command({
    command: "delete",
    builder:{
        id:{demandOption:true}
    },
    handler:function(argv){
        user.deleteUser(argv.id)
    }
})
yargs.argv