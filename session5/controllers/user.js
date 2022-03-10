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
        if(!userData.name || userData.name.length<3) throw new Error("invalid name")
        if( !validator.isEmail(userData.email) ) throw new Error("invalid Email")
        userData.id = Date.now()
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
    // read data from json
    const users = dealWithJson.readData()
    // find user by id find, findIndex
    // const user = users.find(u=> u.id==userId)
    const user = findMyUserIndex(users, "id", userId)  
    // if not found =>user not found
    if(user!=-1) console.log(users[user])
    // else print user
    else console.log('not found')
}
const delUser = (userId) => {
    //get all users from json
    let users = dealWithJson.readData()
    //filter users by id
    let filtered = users.filter(u=> u.id != userId)
    //check if data deleted or not found
    if(users.length == filtered.length) return console.log("not found")
    //save data 
    dealWithJson.writeData(filtered)
}
const editUser = (userId, newData) => {
    //get data from json
    const users = dealWithJson.readData()
    //user index
    const i = users.findIndex(u=> u.id==userId)
    //if user not found
    if(i==-1) return console.log("not found")
    //{"name":"Marwa","age":36,"email":"nouran@test.com","id":1646830542423}
    // console.log(users[i])
    // users[i] = newData
    // users[i].id = userId
    //change data in all data
    users[i] = {id:userId, ...newData}
    // console.log(users[i])
    //save to json
    dealWithJson.writeData(users)
    console.log("data edited")
}


module.exports = { addUser, showAll, showSingle, delUser, editUser }