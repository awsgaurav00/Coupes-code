import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-12 text-center rounded-b-xl shadow-lg mt-16"
    >
      <h1 className="text-5xl font-bold">Share the Savings</h1>
      <p className="mt-4 text-lg">Donate coupons you don’t need and help others save!</p>
      <Link
        href="/donate"
        className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
      >
        Start Donating
      </Link>
    </motion.div>
  );
}
