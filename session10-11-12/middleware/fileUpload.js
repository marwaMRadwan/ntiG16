const multer  = require('multer')
const fs = require("fs")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        const myFileName = file.fieldname+ "_" + Date.now() + path.extname(file.originalname)
        cb(null, myFileName)
    }
})

const upload = multer({
    storage,
    limits:{fileSize:2000000000},
    fileFilter:function(req, file, cb){
        if(path.extname(file.originalname)!= ".jpg")
            return cb(new Error("invalid file extension"))
        cb(null, true)
    }
})

module.exports = upload