const dealWithJson = require("./dealWithJson")
const addUser = () =>{
    const users = dealWithJson.readData()
    users.push({id:1, name:"marwa", age:36})
    dealWithJson.writeData(users)
    console.log("user Added")
}
const showAll = () => {

}
const showSingle = () => {

}
const delUser = () => {

}
const editUser = () => {

}

module.exports = { addUser, showAll, showSingle, delUser, editUser }