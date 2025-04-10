// import fs from "fs";
// import { cloudinaryUploadImg } from "../utils/cloudinary.js";

// export const uploadImage = async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const result = await cloudinaryUploadImg(file.path);

//     // remove local file
//     fs.unlinkSync(file.path);

//     res.status(200).json({
//       message: "Upload successful",
//       url: result.secure_url,
//       public_id: result.public_id,
//     });
//   } catch (error) {
//     console.error("Image Upload Error:", error);
//     res.status(500).json({ message: "Image upload failed" });
//   }
// };
