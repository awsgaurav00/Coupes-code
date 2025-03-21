import Head from "next/head";
import Navbar from "../components/Navbar";
import CouponCard from "../components/CouponCard";
import Footer from "../components/Footer";
import dbConnect from "../utils/dbConnect";
import Coupon from "../models/Coupon";

export default function Browse({ coupons }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Browse Coupons</title>
      </Head>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8 pt-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Browse Available Coupons</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <CouponCard key={coupon._id} coupon={coupon} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const coupons = await Coupon.find({ status: "available" });
  return { props: { coupons: JSON.parse(JSON.stringify(coupons)) } };
}
