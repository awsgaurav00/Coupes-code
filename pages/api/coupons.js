import dbConnect from "../../utils/dbConnect";
import Coupon from "../../models/Coupon";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const coupons = await Coupon.find({ status: "available" });
    res.status(200).json(coupons);
  } else if (req.method === "POST") {
    const newCoupon = new Coupon({ ...req.body, status: "available" });
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
