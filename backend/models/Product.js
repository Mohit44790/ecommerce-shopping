import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type:String,required:true },
    quantity: { type: Number, required: true },
    slug:{type:String,required:true,unique:true,lowercase:true},
    sold: { type: Number, default: 0 },
    images: [], // Assuming images are URLs or filenames
    brand: {
      type: String,
     required:true,
    },
    ratings: [
      {
        star: Number,
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    totalrating: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
