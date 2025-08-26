import express from 'express'
import { commentController, isApprove } from '../Controller/commentsController.js'

const comment=express.Router()

comment.post('/',commentController)
comment.post('/click',isApprove)

export default comment