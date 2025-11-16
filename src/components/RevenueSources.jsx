import { ShoppingCart, Building2, Users, TrendingUp, DollarSign, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const RevenueSources = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

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

  const revenueStreams = [
    {
      icon: ShoppingCart,
      title: "Direct Sales",
      description: "Online sales through website, app, and marketplaces.",
      details: ["E-commerce Website", "Mobile App", "Amazon & Flipkart"],
      percentage: "60%",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      iconBg: "bg-emerald-500",
      glowColor: "shadow-emerald-500/50",
      accentColor: "text-emerald-600"
    },
    {
      icon: Building2,
      title: "B2B Solutions",
      description: "Premium B2B custom décor orders for offices & restaurants.",
      details: ["Corporate Offices", "Restaurants & Hotels", "Retail Spaces"],
      percentage: "30%",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/50",
      accentColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Affiliate & influencer collaborations.",
      details: ["Influencer Marketing", "Affiliate Programs", "Brand Partnerships"],
      percentage: "10%",
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-500",
      glowColor: "shadow-purple-500/50",
      accentColor: "text-purple-600"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-white"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Monetization Strategy</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-900 via-green-900 to-blue-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Revenue Streams
        </h2>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Multiple channels driving sustainable growth and profitability
        </p>

        {/* Revenue cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stream.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and percentage */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${stream.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${hoveredIndex === i ? stream.glowColor + ' shadow-2xl' : 'shadow-lg'}`}>
                    <stream.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-br ${stream.color} bg-clip-text text-transparent`}>
                    {stream.percentage}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-3 ${stream.accentColor} group-hover:scale-[1.02] transition-transform duration-300 origin-left`}>
                  {stream.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {stream.description}
                </p>

                {/* Details list */}
                <div className="space-y-2">
                  {stream.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 transition-all duration-300 transform ${hoveredIndex === i ? 'translate-x-1' : ''}`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stream.color}`}></div>
                      <span className={`text-sm ${hoveredIndex === i ? 'text-gray-900 font-medium' : 'text-gray-600'} transition-all duration-300`}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${stream.color} opacity-5 rounded-tl-full transition-opacity duration-500 group-hover:opacity-10`}></div>

              {/* Top border accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stream.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Revenue projection banner */}
        <div className={`relative bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 rounded-3xl p-10 overflow-hidden shadow-2xl transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Growth Projection</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Diversified Revenue Model
              </h3>
              <p className="text-emerald-50 text-lg">
                Multiple income streams ensure sustainable growth and market resilience
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Year 1 Target', value: '$500K' },
                { label: 'Year 3 Target', value: '$2M+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            View Detailed Financial Projections
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-20 right-20 grid grid-cols-4 gap-2 opacity-10">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default RevenueSources;