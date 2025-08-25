import express from 'express'
import { addBlog } from '../Controller/addBlog'
import upload from '../Middleware/multer'
import auth from '../Middleware/auth'

const addBlog=express.Router()

addBlog.post('/blog',auth,upload.single('image'),addBlog)

export default addBlog