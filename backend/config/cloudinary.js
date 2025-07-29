import{ v2 as  cloudinary} from "cloudinary"
import fs from "fs"
cloudinary.config({
    cloud_name: process.env.CLOUDINAY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary=async (localFilePath) => {
   try {
    if (!localFilePath) {
        return null
        
    }
    const response= await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
    console.log(response.url,'file is upload on cloudinary');
    return response
   } catch (error) {
        fs.unlinkSync(localFilePath)
    console.log("Cloudinary eroor ", error.message)

   }
}
export {uploadOnCloudinary}