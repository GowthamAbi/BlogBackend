import comments from "../Model/Comments.js"

export const commentController=async(req,res)=>{
    try {
        const { id } = req.params; 
        const{name,comment}=req.body
        console.log({id})

        if(!name && !comment){
            return res.json({Success:false , message:"Enter Remaining Details"})
        }

        const saved=await comments.create({blog_id: id,name,comment})


        res.json({saved})
        console.log("Your Commets Saved",saved)

    } catch (error) {
        console.log(error.message)
    }
}

export const isApprove=async(req,res)=>{
    try {

        const{id}=req.body
        const wanteddata=await comments.findById(id)
      wanteddata.approve=!wanteddata.approve

      await wanteddata.save()

        res.json({message:"approve clicked"})
        
    } catch (error) {

         console.log(error.message)
    }

}


export const commentList=async(req,res)=>{

    try {
        
      const list = await comments.find({}).sort({create:-1})
        res.json({list})

    } catch (error) {
        console.log(error.message)
    }

}

export const deleteComment=async(req,res)=>{
    try {
        const{id}=req.body
        await comments.findByIdAndDelete(id)
        res.json({message:"deleted"})
    } catch (error) {
        console.log(error.message)
    }
}