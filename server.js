import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectedDB from './config/db.js'
import authRouter from './Routes/auth.js'
import { addBlog } from './Controller/addBlog.js'




const app=express()
await connectedDB()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.use('/',authRouter)
app.use('/add',ad)

//Port
const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log(`Server is Running On http://localhost:${PORT}`)
})




/*PORT=3000
MONGODB_URI='mongodb+srv://gowthamabi1412:Gowtham2131%40@office.lrtep.mongodb.net/'

EMAIL_ID='gowthamabi1412@gmail.com'
PASSWORD='123456'

SECRET_KEY='APPLE'


PUBLIC_KEY='public_4ARgqsP5UyY9UCQrZ2BN1cxlSnw'
PRIVATE_KEY='private_eIg9qCfVabcKRT0Tj+JmLtiizlI'
URLENDPOINT='https://ik.imagekit.io/gowthamabi'
*/