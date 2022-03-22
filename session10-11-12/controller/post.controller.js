const postModel = require("../db/models/post.model")
class Post{
    static add = async(req, res)=>{
        try{
            const postData = new postModel({ userId: req.user._id, ...req.body })
            await postData.save()
            res.send({ apiStatus:true, data:postData, message:"post added"})    
        }
        catch(e){
            res.send({ apiStatus:false, errors: e.message, message:"error adding post" })
        }
    }
}

module.exports = Post