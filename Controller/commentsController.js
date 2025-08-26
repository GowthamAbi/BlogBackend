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