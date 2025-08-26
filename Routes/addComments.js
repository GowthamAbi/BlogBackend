import express from 'express'
import { commentController, isPublished } from '../Controller/commentsController.js'

const comment=express.Router()

comment.post('/',commentController)
comment.post('/click',isPublished)

export default comment