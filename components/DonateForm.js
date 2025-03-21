import { useState } from "react";
import { motion } from "framer-motion";

export default function DonateForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    expiryDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/coupons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Coupon donated successfully!");
      setFormData({ title: "", description: "", imageUrl: "", expiryDate: "" });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 20% Off Coffee"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Valid at Cafe XYZ"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Image URL (optional)</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., https://example.com/coupon.jpg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Expiry Date</label>
        <input
          type="date"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
          className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
      >
        Donate Coupon
      </button>
    </motion.form>
  );
}
