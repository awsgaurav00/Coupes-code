// components/CouponList.js
import CouponCard from "./CouponCard";

export default function CouponList({ coupons }) {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <CouponCard key={coupon._id} coupon={coupon} />
        ))}
      </div>
    </div>
  );
}
