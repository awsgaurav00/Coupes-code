import Link from "next/link";
import { motion } from "framer-motion";

export default function CouponCard({ coupon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={coupon.imageUrl || "https://via.placeholder.com/300"}
        alt={coupon.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{coupon.title}</h3>
        <p className="mt-2 text-gray-600">{coupon.description}</p>
        <p className="mt-2 text-sm text-gray-500">
          Expires: {new Date(coupon.expiryDate).toLocaleDateString()}
        </p>
        <Link
          href={`/coupons/${coupon._id}`}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Claim Now
        </Link>
      </div>
    </motion.div>
  );
}
