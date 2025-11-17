import { ShoppingBag, Building2, Users } from "lucide-react";

const RevenueSources = () => {
  const sources = [
    {
      text: "Online product sales through website, app & marketplaces.",
      icon: <ShoppingBag size={28} className="text-green-700" />
    },
    {
      text: "B2B custom décor orders for offices & restaurants.",
      icon: <Building2 size={28} className="text-green-700" />
    },
    {
      text: "Affiliate & influencer-driven collaborations.",
      icon: <Users size={28} className="text-green-700" />
    }
  ];

  return (
    <section id="about" className="py-24 px-8 bg-white relative overflow-hidden">

      {/* Soft background accents */}
      <div className="absolute w-80 h-80 bg-green-200/40 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-green-100/40 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-green-900 tracking-tight text-center">
          Revenue Sources
        </h2>

        {/* List */}
        <div className="space-y-8">
          {sources.map((item, i) => (
            <div 
              key={i}
              className="flex items-start gap-5 p-6 bg-green-50 rounded-2xl shadow-sm 
              border border-green-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl shadow">
                {item.icon}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RevenueSources;
