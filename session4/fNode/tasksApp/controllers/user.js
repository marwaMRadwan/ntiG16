//npm installed modules
const validator = require("validator")
const chalk = require("chalk")

const dealWithJson = require("./dealWithJson")
const addUser = (userData) =>{
    try{
        if(!userData.name || userData.name.length<3) throw new Error("invalid name")
        if( !validator.isEmail(userData.email) ) throw new Error("invalid Email")
        userData.id = Date.now()
        const users = dealWithJson.readData()
        users.push(userData)
        dealWithJson.writeData(users)
        console.log(chalk.green("user Added"))    
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
const showAll = () => {
    try{
        const users = dealWithJson.readData()
        if(users.length==0) throw new Error("no users yet")
        else{
            users.forEach(user=>{
                console.log(chalk.green(`
id: ${user.id} - name: ${user.name} - age: ${user.age} - email: ${user.email}
`))
            })
        }
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
const showSingle = (userId) => {
    // read data from json
    const users = dealWithJson.readData()
    // find user by id find, findIndex
    const user = users.find(u=> u.id==userId)
    // if not found =>user not found
    if(user) console.log(user)
    // else print user
    else console.log('not found')
}
const delUser = () => {

}
const editUser = () => {

}

module.exports = { addUser, showAll, showSingle, delUser, editUser }


/*
a=[1,2,3]
a.find(aa=>{})
*/