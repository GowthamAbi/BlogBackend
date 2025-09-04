import express from 'express'
import upload from '../Middleware/multer.js'
import auth from '../Middleware/auth.js'
import { addBlogController,dashBoard,deleteById,getAllBlog, getById, isPublish } from '../Controller/addBlogController.js'

const addBlog=express.Router()

addBlog.post('/add',auth,upload.single("image"),addBlogController)
addBlog.get("/get",getAllBlog)
addBlog.get("/get/:id",getById)
addBlog.delete("/delete/:id",deleteById)
addBlog.post("/publish/:id",isPublish)
addBlog.get("/admin/dashbord",auth,dashBoard)

export default addBlog