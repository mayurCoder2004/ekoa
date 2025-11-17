import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-green-900 to-green-800 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT SIDE – CONTACT FORM */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Contact & Early Access
          </h2>
          <p className="text-green-200 text-lg mb-10 max-w-md">
            Have a partnership idea or investor query? Send us a message and we
            will get back to you.
          </p>

          {/* FORM */}
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/70 text-green-900 placeholder-green-700 rounded-lg px-4 py-3 focus:outline-none shadow-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/70 text-green-900 placeholder-green-700 rounded-lg px-4 py-3 focus:outline-none shadow-sm"
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/70 text-green-900 placeholder-green-700 rounded-lg px-4 py-3 focus:outline-none shadow-sm"></textarea>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-white text-green-900 px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-100 transition">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE — CLEAN CONTACT DETAILS */}
        <div className="flex flex-col justify-center">
          {/* Contact Block */}
          <div className="bg-green-800/30 border border-green-600 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Reach Us</h3>

            <p className="text-green-200 text-lg mb-2">
              <span>Contact:</span>{" "}
              <span className="text-white font-semibold">9122512304</span>
            </p>

            <p className="text-green-200 text-lg mb-6">
              <span>Email:</span>{" "}
              <span className="text-white font-semibold">
                Ekoahelpline@gmail.com
              </span>
            </p>

            {/* Follow us block */}
            <h3 className="text-xl font-bold mb-3">Follow Us On</h3>

            <div className="flex gap-3 text-green-200 text-lg">
              <a
                href="https://www.instagram.com/ekoacommerce?igsh=aHZzdnVvcWt6dWhz"
                target="_blank"
                className="flex items-center gap-3 hover:text-white transition">
                <Instagram size={20} /> Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1BgqPLYuiU/"
                target="_blank"
                className="flex items-center gap-3 hover:text-white transition">
                <Facebook size={20} /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-20 border-t border-green-600/40 pt-6 text-center">
        <p className="text-green-200 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Ekoa</span> — Inspired by
          Nature
        </p>
      </div>
    </footer>
  );
};

export default Footer;
