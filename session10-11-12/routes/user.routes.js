const userController = require("../controller/user.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
router.post("/register", userController.add)
router.post("/login", userController.login)
//logout
router.post("/logout",auth, userController.logOut)
//logout All devices
router.post("/logoutAll",auth, userController.logOutAll)
//change password
router.post("/changePass",auth, userController.changePass)
//profile
router.post("/me",auth, userController.profile)
router.get('/all', auth, userController.all)
router.get('/all/:id', auth, userController.single)
router.delete('/all/:id', auth, userController.del)
router.patch('/all/:id', auth, userController.edit)
router.patch('/all', auth, userController.editWithToken)

router.post("/profileImg", userController.profileImg)
module.exports = router