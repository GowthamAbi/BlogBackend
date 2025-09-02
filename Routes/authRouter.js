import exprees from "express"
import {authController} from "../Controller/adminController.js"
import { addBlogController } from "../Controller/addBlogController.js"

const authRouter=exprees.Router()

authRouter.post("/adminlogin",authController)


export default authRouter