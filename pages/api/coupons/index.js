import dbConnect from '../../../lib/db';
import Coupon from '../../../models/Coupon';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const coupons = await Coupon.find({ status: 'available' }).lean();
    res.status(200).json(coupons);
  } else if (req.method === 'POST') {
    const coupon = new Coupon(req.body);
    await coupon.save();
    res.status(201).json(coupon);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
