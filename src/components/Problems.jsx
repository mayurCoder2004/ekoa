import { AlertTriangle, Clock, BadgeDollarSign, Leaf, Palette, Globe2 } from "lucide-react";

const Problems = () => {
  const items = [
    {
      text: "Hygiene concerns, inconsistent service quality & lack of trust.",
      icon: <AlertTriangle className="text-green-700" size={28} />
    },
    {
      text: "Time-consuming & fragmented décor shopping experience.",
      icon: <Clock className="text-green-700" size={28} />
    },
    {
      text: "Affordable décor often lacks quality.",
      icon: <BadgeDollarSign className="text-green-700" size={28} />
    },
    {
      text: "Limited access to eco-friendly & handmade décor.",
      icon: <Leaf className="text-green-700" size={28} />
    },
    {
      text: "Lack of cultural & artistic value.",
      icon: <Palette className="text-green-700" size={28} />
    },
    {
      text: "Growing demand for globally inspired décor items.",
      icon: <Globe2 className="text-green-700" size={28} />
    }
  ];

  return (
    <section id="problems" className="py-24 px-8 bg-green-50 relative overflow-hidden">
      {/* Soft floating background shapes */}
      <div className="absolute w-80 h-80 bg-green-200/40 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-green-300/30 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-900 relative z-10 tracking-tight">
        Problems We Solve
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-green-100 flex flex-col gap-4 group"
          >
            <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition">
              {item.icon}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problems;
