import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  expiryDate: { type: Date, required: true },
  status: { type: String, default: "available" },
  donorId: String,
  claimedBy: String,
});

export default mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
