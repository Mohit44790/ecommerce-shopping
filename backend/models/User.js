import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    profilePic: {
      type: String,
      default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
    },
    isBlocked: { type: Boolean, default: false },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    cart: { type: Array, default: [] },
    // address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    address: {
      type: String,
      default: "",
    },
    wishlist: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }],
    
    // refreshToken:{type:String},

  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
