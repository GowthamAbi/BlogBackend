import express from 'express'
import { commentController } from '../Controller/commentsController.js'

const comment=express.Router()

comment.post('/',commentController)

export default comment