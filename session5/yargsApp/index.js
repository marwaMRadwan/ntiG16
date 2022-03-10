//my custom modules
const user = require("./controllers/user")
const yargs = require("yargs")
// node index adduser --name="marwa" --age=36 --email="marwaradwan@techs.com"
yargs.command({
    command:"addUser",
    describe:"used for adding users",
    builder:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:20
        },
        email:{
            type:String,
            required:true
        }
    },
    handler:function(argv){
        let userData = {
            name:argv.name,
            age:argv.age,
            email:argv.email,
            id:Date.now()
        }
        user.addUser(userData)
    }
})
yargs.command({
    command:"showAll",
    describe:"used for show all users",
    handler:function(){
        user.showAll()
    }
})
yargs.command({
    command:"showUser",
    describe:"used for show single users",
    builder:{},
    handler:function(argv){

    }
})
yargs.command({
    command:"dealWithUser",
    describe:"used for show or delete users",
    builder:{
        op:{
            type: String,
            required:true
        },
        userId:{
            required:true,
            type:String
        }
    },
    handler:function(argv){
        if(argv.op!="show"&& argv.op!="del") return console.log("invalid operation")
        argv.op=="show"? user.showSingle(argv.userId): user.delUser(argv.userId)
    }
})
yargs.command({
    command:"editUser",
    describe:"used for edit users",
    builder:{
        userId:{},
        newName:{},
        newAge:{},
        newEmail:{}
    },
    handler:function(argv){

    }
})
yargs.argv