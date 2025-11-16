const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">

        {/* Divider Line */}
        <div className="w-full border-t border-green-700 opacity-40 mb-4"></div>

        {/* Main Text */}
        <p className="text-lg tracking-wide font-light">
          © {new Date().getFullYear()} <span className="font-semibold">Ekoa</span> — Inspired by Nature
        </p>

        {/* Social Icons (Optional but looks pro) */}
        <div className="flex gap-6 mt-2">
          <a href="#" className="hover:text-green-300 transition">Instagram</a>
          <a href="#" className="hover:text-green-300 transition">LinkedIn</a>
          <a href="#" className="hover:text-green-300 transition">Facebook</a>
        </div>

        {/* Subtle Bottom Blur */}
        <div className="w-full h-6 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div>
      </div>
    </footer>
  );
};

export default Footer;
