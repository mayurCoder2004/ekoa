import { BarChart3 } from "lucide-react";

const RevenueGrowth = () => {
  const data = [
    { year: "Year 1", amount: "₹18.5 lakh" },
    { year: "Year 2", amount: "₹30 lakh" },
    { year: "Year 3", amount: "₹45 lakh" }
  ];

  return (
    <section id="revenue" className="py-24 px-8 bg-green-50 relative overflow-hidden">

      {/* Soft glowing background shapes */}
      <div className="absolute w-96 h-96 bg-green-300/40 blur-3xl rounded-full top-10 -right-20"></div>
      <div className="absolute w-80 h-80 bg-green-200/40 blur-3xl rounded-full bottom-10 -left-16"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-green-900 tracking-tight">
          Projected Revenue Growth
        </h2>

        {/* Grid of Revenue Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md border border-green-200 
              hover:shadow-2xl hover:-translate-y-1 transition-all text-center relative group"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 
                w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg
                group-hover:scale-110 transition">
                <BarChart3 size={26} />
              </div>

              {/* Year */}
              <h3 className="text-xl font-semibold text-green-800 mt-8">
                {item.year}
              </h3>

              {/* Revenue Amount */}
              <p className="text-3xl font-extrabold text-green-900 mt-4">
                {item.amount}
              </p>

              {/* Decorative Line */}
              <div className="w-16 h-1 bg-green-600 mx-auto mt-6 rounded-full opacity-80"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueGrowth;
