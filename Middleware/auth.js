import  jwt  from "jsonwebtoken";

const auth=(req,res,next)=>{
    const token=req.headers.authorization;
    try {
        
        jwt.verify(token,process.env.SECRET_KEY)
        next()

    } catch (error) {
        res.json({message:"Error"})
    }
}

export const passwordCheck=async(req,res,next)=>{
    try {
    const { email, password } = req.body;

   
    if (email === process.env.EMAIL_ID && password === process.env.PASSWORD) {
      return next(); 
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error("PasswordCheck Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export default auth