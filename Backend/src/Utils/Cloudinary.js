import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const Upload_On_Cloudinary = async (localfilepath)=>{
    try {
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type:"auto"
        });
        fs.unlinkSync(localfilepath);
        return response.url
        
    } catch (error) {
     fs.unlinkSync(localfilepath);
     console.log("Error while uploading file on cloudinary::",error)   
    }
};