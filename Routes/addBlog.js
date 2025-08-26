import express from 'express'
import upload from '../Middleware/multer.js'
import auth from '../Middleware/auth.js'
import { addBlogController } from '../Controller/addBlogController.js'

const addBlog=express.Router()

addBlog.post('/blog',auth,upload.single('image'),addBlogController)

export default addBlog