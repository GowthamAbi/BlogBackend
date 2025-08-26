import fs from 'fs'
import imagekit from "../config/imageKit.js"
import Blog from "../Model/Blog.js"
import { create } from 'domain'
import comments from '../Model/Comments.js'

export const addBlogController=async(req,res)=>{
    try {
        const blogData = JSON.parse(req.body.blog)
      
        const {title,subTitle,description,category,isPublished}=blogData
        const imageFile=req.file



        if (!title || !subTitle || !description || !category || !isPublished){
        
            return res.json({success:false,message:"Invalid"})
        }

        const fileBuffer=fs.readFileSync(imageFile.path)
       

        const response=await imagekit.upload(
            {
                file:fileBuffer,
                fileName:imageFile.originalname,
                folder:"/blogs"
            }
        )



        const originalImageUrl=await imagekit.url({
            path:response.filePath,
            transformation:[{
                quality:'auto',
                format:'webp',
                width:'1200'
            }
            ]
        })

        const image=originalImageUrl


        await Blog.create({title,subTitle,description,category,isPublished,image})
        res.json({success:true,message:"Blog is Saved"})
        
    } catch (error) {
        console.log(error.message)
    }
}


export const getAllBlog=async(req,res)=>{
    try {
   

        const allBlog=await Blog.find({}).sort({create:-1})
        
        res.json({success:true,allBlog})

    } catch (error) {
            res.json({success:false,message:"No Blog"})
    }
}

export const getById=async(req,res)=>{
    console.log("getbyid")
    try {
        console.log("getbyid")
        const {id}=req.parse
        
        const blog=await Blog.findById(id)
        res.json({blog})

    } catch (error) {
        console.log(error.message)
    }
}


export const deleteById=async(req,res)=>{
    try {
     
        const {id}=req.body
       
        await Blog.findByIdAndDelete(id)
         res.json({message:"Deleted"})
        
    } catch (error) {
        console.log(error.message)
    }
}


export const isPublish=async(req,res)=>{
    try {

        const{id}=req.body
        const wanteddata=await Blog.findById(id)
      wanteddata.isPublished=!wanteddata.isPublished

      await wanteddata.save()

        res.json({message:"Published clicked"})
        
    } catch (error) {

         console.log(error.message)
    }

}


export const dashBoard=async(req,res)=>{
    try {
        const blogs=await Blog.countDocuments({})
        const commentsCount=await comments.countDocuments({})
        res.json({blog:blogs ,commentsCount:commentsCount})

    } catch (error) {
         console.log(error.message)
    }
}