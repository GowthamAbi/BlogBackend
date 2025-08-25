import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectedDB from './config/db.js'
import authRouter from './Routes/auth.js'




const app=express()
await connectedDB()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.use('/',authRouter)

//Port
const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log(`Server is Running On http://localhost:${PORT}`)
})