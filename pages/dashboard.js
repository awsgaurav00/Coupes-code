import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        <p>Manage your donated and claimed coupons here.</p>
      </main>
      <Footer />
    </div>
  );
}
