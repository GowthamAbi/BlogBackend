import express from 'express'
import { DashBoard } from '../Controller/DashBoard.js'
const dashBoard=express.Router()

dashBoard.get('/',DashBoard)

export default dashBoard