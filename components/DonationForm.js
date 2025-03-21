import { useState } from 'react';

export default function DonationForm() {
  const [formData, setFormData] = useState({
    title: '', description: '', category: '', expirationDate: '', imageUrl: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/coupons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert('Coupon donated successfully!');
    else alert('Error donating coupon.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Title</label>
        <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Description</label>
        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Category</label>
        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full p-2 border rounded">
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="date" value={formData.expirationDate} onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Image URL (optional)</label>
        <input type="text" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Donate Coupon</button>
    </form>
  );
}
