import { parse } from "dotenv"
import fs from 'fs'
import imagekit from "../config/imageKit.js"
import Blog from "../Model/Blog.js"

export const addBlog=async(req,res)=>{
    try {

        const [title,subTitle,description,category,isPublished]=JSON.parse(req.body.blog)
        const imageFile=req.file
        if(!title||!subTitle||!description||category||isPublished){
        
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