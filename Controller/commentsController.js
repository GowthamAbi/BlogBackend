import comments from "../Model/Comments.js"

export const commentController=async(req,res)=>{
    try {
        const{name,comment}=req.body
        if(!name && !comment){
            return res.json({Success:false , message:"Enter Remaining Details"})
        }

        const saved=await comments.create({name,comment})

        res.json({saved})

    } catch (error) {
        console.log(error.message)
    }
}