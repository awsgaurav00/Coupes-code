import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white shadow-md z-10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Donate Coupons
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/donate" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Donate
            </Link>
          </li>
          <li>
            <Link href="/browse" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Browse
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
