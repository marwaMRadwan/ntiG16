//my custom modules
const user = require("./controllers/user")

let userData = {
    name:"a",
    age:"b",
    email:"c@test.com"
}
// user.addUser(userData)
// user.showAll()
// user.showSingle(1646830535508)
user.editUser(1646830535538, userData)
