
export const authController=async(req,res)=>{
    try{
        const {email,password}=req.body

        if(!email==process.env.EMAIL_ID)
        {
            console.log("Authendication is Failed")
        }

        res.send("Email is correct")

    }catch(err){
        console.log(err.message)
    }

}

