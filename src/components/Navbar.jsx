import { useState } from "react";
import { DoorClosed, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <DoorClosed size={32} className="text-green-700" />
          <h1 className="text-3xl font-extrabold text-green-700 tracking-tight">
            Ekoa
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium items-center">
          {["Mission", "Solutions", "Revenue", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer group text-lg"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          {["Mission", "Solutions", "Revenue", "Contact"].map((item) => (
            <p
              key={item}
              onClick={() => {
                scrollToSection(item);
                setOpen(false);
              }}
              className="py-2 border-b border-gray-200 hover:text-green-700 transition cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
