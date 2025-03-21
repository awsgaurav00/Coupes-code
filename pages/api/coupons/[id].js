import dbConnect from '../../../../lib/db';
import Coupon from '../../../../models/Coupon';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  const coupon = await Coupon.findById(id).lean();
  if (coupon) res.status(200).json(coupon);
  else res.status(404).json({ message: 'Coupon not found' });
}
