import mongoose,{Schema} from "mongoose";

const registerSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  guests: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  budgetRange: {
    type: String,
    required: true
  }
}, { timestamps: true }); 
export const RegisterUser=mongoose.model("RegisterUser",registerSchema)