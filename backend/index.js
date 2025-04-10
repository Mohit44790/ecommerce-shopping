import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import categoryRoutes from "./routes/category.js";
import BlogCategoryRoutes from "./routes/blogCategRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
import morgan from "morgan";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    
}
app.use(morgan("dev"));
app.use(cookieParse());
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended:true}));


app.get("/", (req, res) => {
    res.send("Server is running");
  });

//api
app.use("/api/user",userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blogCategory", BlogCategoryRoutes);
app.use("/api/order", orderRoutes);
// app.use("/api/upload", uploadRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})