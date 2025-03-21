import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dbConnect from "../../utils/dbConnect";
import Coupon from "../../models/Coupon";
import { motion } from "framer-motion";

export default function CouponDetail({ coupon }) {
  const handleClaim = async () => {
    const res = await fetch(`/api/coupons/${coupon._id}/claim`, { method: "PUT" });
    if (res.ok) alert("Coupon claimed successfully!");
    else alert("Failed to claim coupon.");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{coupon.title}</title>
      </Head>
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <img src={coupon.imageUrl || "https://via.placeholder.com/500"} alt={coupon.title} className="w-full h-64 object-cover rounded-lg" />
          <h1 className="text-3xl font-bold text-gray-800 mt-6">{coupon.title}</h1>
          <p className="mt-4 text-gray-600">{coupon.description}</p>
          <p className="mt-2 text-sm text-gray-500">Expires: {new Date(coupon.expiryDate).toLocaleDateString()}</p>
          <button
            onClick={handleClaim}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Claim Coupon
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const coupon = await Coupon.findById(params.id);
  return { props: { coupon: JSON.parse(JSON.stringify(coupon)) } };
}
