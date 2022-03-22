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
    static myPosts = async(req,res)=>{
        try{
            await req.user.populate("userPosts")
            res.status(200).send({data: req.user.userPosts})
        }
        catch(e){
            res.status(500).send({erros:e.message})
        }
    }
}

module.exports = Post