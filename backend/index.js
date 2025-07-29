import  "dotenv/config"
import { app } from "./app.js";
import connectDB from "./db/connection.js";
 connectDB()
 
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running`);
        
    })
})
.catch((err)=>{
    console.log("server is not ruunung",err);
    
})