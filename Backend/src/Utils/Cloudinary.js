import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const Upload_On_Cloudinary = async (localfilepath) => {
  try {
    if (!fs.existsSync(localfilepath)) {
      throw new Error("File does not exist");
    }

    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
      access_mode:"public"
    });
    fs.unlinkSync(localfilepath);
    return response.url;
  } catch (error) {
    console.log("Error while uploading file on cloudinary::", error);
    if (fs.existsSync(localfilepath)) {
      fs.unlinkSync(localfilepath);
    }
    return null;
  }
};

//todo: solve the bug of not deleting the files which are not image
export const delete_from_Cloudinary = async (fileUrl) => {
  try {
    const public_id = fileUrl.split("/").slice(-2)[0];
  
    if (!public_id) {
      throw new Error("Invalid public_id extracted from URL");
    }
   
    
    const response = await cloudinary.uploader.destroy(public_id);
  
    if (response.result === "ok") {
      console.log("Deletion of file from Cloudinary successful");
    } else {
      console.log("Failed to delete file from Cloudinary:", response);
    }
  } catch (error) {
    console.log("Error occurred while deleting file from Cloudinary:", error);
  }
  
};


// try {
//   const public_id = fileUrl.split("/").slice(-2)[0];

//   if (!public_id) {
//     throw new Error("Invalid public_id extracted from URL");
//   }

//   // Check if the file exists
//   const resource = await cloudinary.api.resource(public_id);
//   if (!resource) {
//     throw new Error("Resource not found on Cloudinary");
//   }

//   const resourceType = resource.resource_type;
//   console.log(resourceType);
//   const response = await cloudinary.uploader.destroy(public_id, { resource_type: resourceType });

//   if (response.result === "ok") {
//     console.log("Deletion of file from Cloudinary successful");
//   } else {
//     console.log("Failed to delete file from Cloudinary:", response);
//   }
// } catch (error) {
//   console.log("Error occurred while deleting file from Cloudinary:", error);
// }