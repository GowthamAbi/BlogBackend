import jwt  from "jsonwebtoken"

export const authController=async(req,res)=>{
    try{
        const {email,password}=req.body

        console.log(email,password)

        if(email!==process.env.EMAIL_ID || password!==process.env.PASSWORD)
        {
            return( res.json({success:false,message:"Invalid Credentials"}),

            console.log("invalid",process.env.EMAIL_ID===email,password===process.env.PASSWORD)

        )
        }

        const token=jwt.sign({email},process.env.SECRET_KEY)
       return( 
        res.json({success:true,token}),
        console.log("Valid",process.env.EMAIL_ID===email,password===process.env.PASSWORD),
        console.log(token)
    )




    }catch(err){
        console.log(err.message)
    }

}

