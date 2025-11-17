import { Sparkles, Truck, Lightbulb } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Customization & Personal Touch",
      desc: "Premium custom décor solutions tailored using our AI trend analysis system.",
      icon: (
        <Sparkles
          size={26}
          className="text-green-700"
        />
      ),
    },
    {
      title: "Doorstep Delivery",
      desc: "Eco-friendly handmade décor delivered via our website, app & marketplaces.",
      icon: (
        <Truck
          size={26}
          className="text-green-700"
        />
      ),
    },
    {
      title: "Content-Driven Inspiration",
      desc: "DIY tutorials, styling guides & décor trends for empowered creativity.",
      icon: (
        <Lightbulb
          size={26}
          className="text-green-700"
        />
      ),
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mb-14 tracking-tight">
          Our Solutions
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="p-8 bg-green-50 border border-green-200 rounded-2xl shadow">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow mb-5">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800">{sol.title}</h3>
              <p className="text-gray-700 mt-3">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
