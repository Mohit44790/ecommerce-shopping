import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";



const multerstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "uploads/"); // Make sure this folder exists
    cb(null,path.join(__dirname,"../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, uniqueSuffix + path.extname(file.originalname));
    cb(null,file.filename + "-" + uniqueSuffix + ".jpeg")
  },
});

const multerFilter = (req,file,cb) =>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }else{
        cb({message:"unsupported file formate"},
            false
        )
    }
}

export const uploadPhoto =multer ({
    storage:multerstorage,
    fileFilter:multerFilter,
    limits:{fieldSize:2000000},
})
export const productImgResize = async (req,res,next)=>{
 if(!req.files)  return next();
 await Promise.all(
    req.files.map(async(file)=>{
    await sharp(file.path)
    .resize(300,300)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`public/images/product/${file.filename}`);
    fs.unlinkSync(`public/images/product/${file.filename}`)
 })
);
 next();
};
export const blogImgResize = async (req,res,next)=>{
 if(!req.files)  return next();
 await Promise.all(
    req.files.map(async(file)=>{
    await sharp(file.path)
    .resize(300,300)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`public/images/blog/${file.filename}`);
    fs.unlinkSync(`public/images/blog/${file.filename}`)

 })
);
 next();
};



