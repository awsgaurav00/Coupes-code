import Head from "next/head";
import Navbar from "../components/Navbar";
import DonateForm from "../components/DonateForm";
import Footer from "../components/Footer";

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Donate a Coupon</title>
      </Head>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8 pt-24">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Donate a Coupon</h1>
        <DonateForm />
      </div>
      <Footer />
    </div>
  );
}
