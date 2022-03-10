//npm installed modules
const validator = require("validator")
const chalk = require("chalk")
const dealWithJson = require("./dealWithJson")
const findMyUserIndex = (users, key, val)=>{
    let i = users.findIndex( user => user[key] == val )
    return i
}
const addUser = (userData) =>{
    try{
        if(userData.name.length<3) throw new Error("invalid name")
        if( !validator.isEmail(userData.email) ) throw new Error("invalid Email")
        const users = dealWithJson.readData()
        if(findMyUserIndex(users, "email", userData.email ) != -1 ) 
            return console.log("email used before")
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
    const users = dealWithJson.readData()
    const user = findMyUserIndex(users, "id", userId)  
    if(user!=-1) console.log(users[user])
    else console.log('not found')
}
const delUser = (userId) => {
    let users = dealWithJson.readData()
    let filtered = users.filter(u=> u.id != userId)
    if(users.length == filtered.length) return console.log("not found")
    dealWithJson.writeData(filtered)
}
const editUser = (userId, newData) => {
    const users = dealWithJson.readData()
    const i = users.findIndex(u=> u.id==userId)
    if(i==-1) return console.log("not found")
    users[i] = {id:userId, ...newData}
    dealWithJson.writeData(users)
    console.log("data edited")
}
module.exports = { addUser, showAll, showSingle, delUser, editUser }