import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectedDB from './config/db.js'
import authRouter from './Routes/authRouter.js'
import addBlog from './Routes/addBlog.js'
import comment from './Routes/addComments.js'

const app=express()
await connectedDB()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.use('/',authRouter)

app.use('/blog',addBlog)
app.use('/comments',comment)

//Port
const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log(`Server is Running On http://localhost:${PORT}`)
})




