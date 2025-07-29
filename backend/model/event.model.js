import mongoose,{Schema} from "mongoose"

const eventSchema=new Schema({
    image:{
        type:String,//cloudinary url
        required:true
    },
    title:{
        type:String,
        required:true
    },

  location:{
          type:String,
        required:true
    },
    discription:{
          type:String,
        required:true
    },
    
    
},{timestamps:true})
export const Event=mongoose.model("Event",eventSchema)
