// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CouponList from "../components/CouponList"; // Import the component
import Footer from "../components/Footer";
import dbConnect from "../utils/dbConnect";
import Coupon from "../models/Coupon";

export default function Home({ coupons }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Donate Coupons</title>
        <meta name="description" content="Donate and claim coupons easily" />
      </Head>
      <Navbar />
      <HeroSection />
      <CouponList coupons={coupons} /> {/* Use the imported component */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const coupons = await Coupon.find({ status: "available" }).limit(6);
  return { props: { coupons: JSON.parse(JSON.stringify(coupons)) } };
}
