import mongoose,{Schema} from "mongoose";
const adminSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
export const Admin=mongoose.model("Admin",adminSchema)