import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const cloudinaryUploadImg = async (fileToUploads) => {
 return new Promise((resolve)=>{
  cloudinary.uploader.upload(fileToUploads,(result)=>{
    resolve(
      {
        url:result.secure_url,
      },
      {
        resource_type:"auto",
      }
    )
  })
 })
};

export default cloudinary;
