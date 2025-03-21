import dbConnect from "../../../utils/dbConnect";
import Coupon from "../../../models/Coupon";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "PUT") {
    const coupon = await Coupon.findById(req.query.id);
    if (coupon && coupon.status === "available") {
      coupon.status = "claimed";
      await coupon.save();
      res.status(200).json(coupon);
    } else {
      res.status(400).json({ message: "Coupon not available" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
