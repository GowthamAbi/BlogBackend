import express from 'express'
import { commentController, commentList, deleteComment, isApprove } from '../Controller/commentsController.js'

const comment=express.Router()

comment.post('/',commentController)
comment.post('/click',isApprove)
comment.get('/list',commentList)
comment.delete('/delete',deleteComment)

export default comment