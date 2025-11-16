import { AlertCircle, ShoppingBag, Package, Leaf, Palette, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Problems = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    {
      icon: AlertCircle,
      title: "Trust Issues",
      description: "Hygiene concerns, inconsistent service quality & lack of trust.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-500/10",
      accentColor: "text-red-600"
    },
    {
      icon: ShoppingBag,
      title: "Fragmented Experience",
      description: "Fragmented shopping experience across multiple websites.",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-500/10",
      accentColor: "text-amber-600"
    },
    {
      icon: Package,
      title: "Quality vs Price",
      description: "Poor quality products at affordable prices.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500/10",
      accentColor: "text-orange-600"
    },
    {
      icon: Leaf,
      title: "Sustainability Gap",
      description: "Limited access to sustainable & eco-friendly handmade choices.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-500/10",
      accentColor: "text-emerald-600"
    },
    {
      icon: Palette,
      title: "Cultural Value",
      description: "Lack of cultural and artistic value.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500/10",
      accentColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Style Demand",
      description: "Demand for trendy & globally-inspired decor items.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500/10",
      accentColor: "text-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Challenges We Address</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Market Challenges
        </h2>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Understanding the pain points in today's home decor market
        </p>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:-translate-y-2`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.accentColor}`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${item.accentColor} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full`}></div>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className={`mt-16 text-center transition-all duration-700 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
            <p className="text-gray-700 font-medium">
              These challenges create a <span className="font-bold text-red-600">$2B+ market opportunity</span> waiting to be solved
            </p>
          </div>
        </div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    </section>
  );
};

export default Problems;