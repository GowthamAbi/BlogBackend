import express from 'express'
import upload from '../Middleware/multer.js'
import auth from '../Middleware/auth.js'
import { addBlogController,deleteById,getAllBlog, getById } from '../Controller/addBlogController.js'

const addBlog=express.Router()

addBlog.post('/blog',auth,upload.single('image'),addBlogController)
addBlog.get("/blog",getAllBlog)
addBlog.get("/blog/:id",getById)


addBlog.delete("/blog/:id",deleteById)
export default addBlog