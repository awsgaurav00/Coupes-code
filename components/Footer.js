export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>&copy; {new Date().getFullYear()} Donate Coupons. All rights reserved.</p>
      <div className="mt-2">
        <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms</a>
        <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy</a>
        <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
      </div>
    </footer>
  );
}
