import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    name:{type:String,require:true},
    comment:{type:String,require:true},
    publised:{type:Boolean,default:false}

})


const comments=mongoose.model('comment',commentSchema)

export default comments