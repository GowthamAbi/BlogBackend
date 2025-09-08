import Blog from "../Model/Blog.js"
import Comments from "../Model/Comments.js"

export const DashBoard=async(req,res)=>{

    try {
        
        const blog=await Blog.find()
        const comment=await Comments.find()
        res.json({blog,comment})
    } catch (error) {
        console.log("Error in DashBoard option")
    }
}