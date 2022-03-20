const router = require("express").Router()
router.get("/", (req, res)=> res.send("test post routes"))
module.exports = router