import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const Upload_On_Cloudinary = async (localfilepath)=>{
    try {
        if (!fs.existsSync(localfilepath)) {
            throw new Error("File does not exist");
        } 

        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type:"auto"
        });
        fs.unlinkSync(localfilepath);
        return response.url
        
    } catch (error) {
     console.log("Error while uploading file on cloudinary::",error) 
     if (fs.existsSync(localfilepath)) {
        fs.unlinkSync(localfilepath);
    }
    return null;

    }
};