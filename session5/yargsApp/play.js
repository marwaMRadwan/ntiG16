//const directory 
// console.log(__dirname)
// console.log(__filename)
// console.log(process.argv[2])
// if(process.argv[2]=="add")   
//     console.log( +process.argv[4] + +process.argv[3])

//npm i yargs
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe:"",
    builder:{
        x:{
            type:Number,
            required:true
        },
        y:{}
    },
    handler: function(argv){
        console.log(argv.x+argv.y)
    }
})
yargs.command({
    command: "sub",
    handler: function(){
        console.log("test yargs 2")
    }
})
yargs.argv





