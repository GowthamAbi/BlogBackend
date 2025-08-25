import express from 'express'
import upload from '../Middleware/multer'
import auth from '../Middleware/auth'
import { addBlogController } from '../Controller/addBlogController'

const addBlog=express.Router()

addBlog.post('/blog',auth,upload.single('image'),addBlogController)

export default addBlog