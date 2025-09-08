import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectedDB from './config/db.js'
import authRouter from './Routes/authRouter.js'
import addBlog from './Routes/addBlog.js'
import comment from './Routes/addComments.js'
import dashBoard from './Routes/dashBoard.js'


const app=express()
await connectedDB()

//Middleware

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json())

//Route
app.use('/',authRouter)
app.use('/admin/dashboard',dashBoard)
app.use('/blog',addBlog)
app.use('/comments',comment)

//Port
const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log(`Server is Running On http://localhost:${PORT}`)
})




