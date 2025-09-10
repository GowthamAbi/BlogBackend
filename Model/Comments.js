import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    blog_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Blog",                         
    required: true                        
  },
    name:{type:String,require:true},
    comment:{type:String,require:true},
    approve:{type:Boolean,default:false},
    createdAt: { type: Date,default: Date.now }

})


const comments=mongoose.model('comment',commentSchema)

export default comments