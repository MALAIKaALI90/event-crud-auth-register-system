import { RegisterUser } from "../model/register.model.js"

const userResgister=async (req,res) => {
  
         const  {  fullName,email,phone,guests,eventDate,duration,location,eventType,budgetRange}=req.body
        if (! fullName||!email||!phone||!guests||!eventDate||!duration||!location||!eventType||!budgetRange) {
            return res.json({success:false,message:"All fields are required"})
            
        }
        const newRegistration=await RegisterUser.create({
             fullName,
             email,
             phone,
             guests,
             eventDate,
             duration,
             location,
             eventType,
             budgetRange
        })
        await newRegistration.save()
            res.status(201).json({
          success: true,
          message: "Registration successful",
          data: newRegistration
        });
  
  
    }
    const getALlRegistratiom=async (req,res) => {
        const RegisterUsers=await RegisterUser.find()
        res.json({success:true,message:"This is ALl Register User",RegisterUsers})
    }
 
const deleteRegistration=async (req,res) => {
    const {userId}=req.params;
    const deleteUser=await RegisterUser.findByIdAndDelete(userId)
    res.json({success:true,message:"Deleted user Successfully"})
}

export { userResgister,getALlRegistratiom,deleteRegistration}