import { Router } from "express";
import{ userResgister,  deleteRegistration, getALlRegistratiom } from "../controller/register.controller.js";
import { auth } from "../middleware/admin.auth.js";
const RegisterRouter=Router()
RegisterRouter.post("/register",userResgister)
RegisterRouter.get("/all",getALlRegistratiom)
RegisterRouter.delete("/delete/:userId",deleteRegistration)


export default RegisterRouter