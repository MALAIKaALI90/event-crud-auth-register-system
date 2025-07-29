import express from "express";
import cors from "cors"
import userRouter from "./routes/admin.routes.js";
import RegisterRouter from "./routes/register.routes.js";
import productRouter from "./routes/event.routes.js";
import cookieParser from "cookie-parser";




const app=express()
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));
app.use(express.static("public"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/api/admin",userRouter)
app.use("/api/user",RegisterRouter)
app.use("/api/product",productRouter)



export {app}