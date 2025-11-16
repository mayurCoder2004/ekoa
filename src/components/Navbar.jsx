import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Mission", id: "mission" },
    { name: "Problems", id: "problems" },
    { name: "Solutions", id: "solutions" },
    { name: "Revenue", id: "revenue" },
    { name: "Profit", id: "profit" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-white/80 backdrop-blur-md shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ekoa
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-2 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
                  )}
                  <span className="absolute inset-0 rounded-lg bg-purple-100 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <button className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ekoa
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="p-6 space-y-2">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`transform transition-all duration-300 delay-${index * 50}`}
              style={{
                transform: open ? "translateX(0)" : "translateX(20px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <button
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="text-lg">{item.name}</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeSection === item.id
                      ? "text-purple-600"
                      : "text-gray-400 group-hover:translate-x-1"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;