// const router = require('express').Router()
// const multer  = require('multer')
// const fs = require("fs")
// const path = require("path")
// const upload = multer({ dest: 'uploads/' })

// router.post("/img",upload.single('myImg'),  async(req,res)=>{
//     const fExtension = path.extname(req.file.originalname)
//     let filePath = path.join(__dirname, '../', req.file.path)
//     fs.rename(filePath, `${filePath}${fExtension}`, ()=>{})
//     res.send('done')
// })

const router = require('express').Router()
const upload = require("../middleware/fileUpload")
router.post("/img", upload.single('myImg'),  async(req,res)=>{
    res.send("done")
})
module.exports = router







