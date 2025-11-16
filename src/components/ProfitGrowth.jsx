import { TrendingUp } from "lucide-react";

const ProfitGrowth = () => {
  const profits = [
    { year: "Year 1", amount: "₹9.5 lakh" },
    { year: "Year 2", amount: "₹16.5 lakh" },
    { year: "Year 3", amount: "₹28 lakh" }
  ];

  return (
    <section id="profit" className="py-24 px-8 bg-white relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute w-96 h-96 bg-green-200/50 blur-3xl rounded-full top-0 -right-20"></div>
      <div className="absolute w-80 h-80 bg-green-100/40 blur-3xl rounded-full bottom-0 -left-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-green-800 tracking-tight text-center">
          Projected Profit Growth
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {profits.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-green-50 to-green-100/70 border border-green-200 
              rounded-2xl shadow-md hover:shadow-xl transition-all text-center relative group"
            >
              {/* Icon Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                w-14 h-14 bg-green-600 text-white flex items-center justify-center rounded-full shadow-lg
                group-hover:scale-110 transition">
                <TrendingUp size={26} />
              </div>

              <h3 className="text-xl font-bold text-green-800 mt-8">{item.year}</h3>

              <p className="text-3xl font-extrabold text-green-900 mt-4">
                {item.amount}
              </p>

              {/* Decorative bottom line */}
              <div className="w-16 h-1 bg-green-600 mx-auto mt-6 rounded-full opacity-80"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitGrowth;
