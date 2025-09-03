import exprees from "express"
import {authController} from "../Controller/adminController.js"
import { addBlogController } from "../Controller/addBlogController.js"
import { passwordCheck } from "../Middleware/auth.js"

const authRouter=exprees.Router()

authRouter.post("/adminlogin",passwordCheck,authController)
authRouter.post("/logout",passwordCheck,authController)


export default authRouter