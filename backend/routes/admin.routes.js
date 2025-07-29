import { Router } from "express";
import adminLogin from "../controller/admin.controller.js";
const userRouter=Router()
userRouter.post("/login",adminLogin)
export default userRouter