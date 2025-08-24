import mongoose from "mongoose";

const connectedDB=async()=>{

    try{
 
        mongoose.connection.on('connected',()=>console.log("Data Base is Connected")
        )
       await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
      
    }
    catch(err){
        console.log(err.message)
    }
}

export default connectedDB