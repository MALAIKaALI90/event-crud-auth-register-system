import { uploadOnCloudinary } from "../config/cloudinary.js";
import {Event} from "../model/event.model.js"


const creatProduct = async (req, res) => {
  try {
    const imageLocalFilePath = req.file.path;

    if (!imageLocalFilePath) {
      return res.json({ success: false, message: "Image is required" });
    }

    const image = await uploadOnCloudinary(imageLocalFilePath);

    const { title, discription, date, price, location } = req.body;

    if ([title, discription, location].some((field) => field.trim() === "")) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const eventMade = await Event.create({
      image:image.url,
      title,
      discription,
  
      location
    });

    await eventMade.save();

    res.json({ success: true, message: "Event made", eventMade });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listProduct=async (req,res) => {
     const allEvents=await Event.find()
     if (!allEvents) {
        return res.status(400).json({message:"there is no such route"})
        
     }
     res.json({success:true,message:"this is all Events",allEvents})
    
}
const updateProduct=async (req,res) => {

    const {eventId}=req.params;
        const { title, discription, date, price, location } = req.body;
            const imageLocalFilePath = req.file?.path;

    if (!imageLocalFilePath) {
      return res.json({ success: false, message: "Image is required" });
    }

    const image = await uploadOnCloudinary(imageLocalFilePath);
    const updatedEvent=await Event.findByIdAndUpdate(eventId,
       { $set:{
             title, discription, date, price, location,
             image:image
        }},
        {new:true}
    )
    res.json({success:true,message:"your Event is updated successfully",updatedEvent})
    
}
const deleteProduct=async (req,res) => {
    const {eventId}=req.params;
    if (!eventId) {
        return res.json({success:false,message:"there is no such event"})
        
    }
    const deleteEvent=await Event.findByIdAndDelete(eventId)
    res.json({success:true,message :"deleted Event successfully"})
}

export {creatProduct,listProduct,updateProduct,deleteProduct}