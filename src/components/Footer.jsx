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
      className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT SIDE – CONTACT FORM */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">
            Contact & Early Access
          </h2>

          <p className="text-green-200 mb-8 text-lg">
            Have a partnership idea, investor question, or want to join the
            beta? Drop your message below.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/40 text-white placeholder-green-900 border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/60 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/40 text-white placeholder-green-900 border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/60 transition"
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/40 text-white placeholder-green-900 border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/60 transition"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-white text-green-900 px-6 py-2 rounded-lg font-semibold hover:bg-green-100 transition">
                Send
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition">
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE – HORIZONTAL DETAILS WITH ICONS */}
        <div className="flex flex-col justify-center md:pl-10">
          <div className="flex flex-col gap-10">
            {/* FIRST ROW */}
            <div className="flex justify-between md:justify-start md:gap-20">
              {/* LEFT COLUMN */}
              <div>
                <h3 className="text-xl font-bold mb-2">Reach Us Directly</h3>
                <p className="text-green-200 text-lg">
                  Contact:{" "}
                  <span className="text-white font-semibold">9122512304</span>
                </p>
                <p className="text-green-200 text-lg">
                  Email:{" "}
                  <span className="text-white font-semibold">
                    Ekoahelpline@gmail.com
                  </span>
                </p>
              </div>

              {/* RIGHT COLUMN - SOCIALS WITH ICONS */}
              <div>
                <h3 className="text-xl font-bold mb-2">Follow Us</h3>

                <div className="flex gap-6 text-lg text-green-200">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/ekoacommerce?igsh=aHZzdnVvcWt6dWhz"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition">
                    <Instagram size={20} /> Instagram
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1BgqPLYuiU/"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-white transition">
                    <Facebook size={20} /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-16 border-t border-green-600/40 pt-6 text-center">
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
