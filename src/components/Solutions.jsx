import { Sparkles, Truck, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const solutions = [
    {
      icon: Sparkles,
      title: "Customization & Personal Touch",
      desc: "Premium custom décor solutions tailored using our AI Trend Analysis System.",
      features: ["AI-Powered Recommendations", "Personalized Design", "Trend Forecasting"],
      color: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: Truck,
      title: "Doorstep Service Delivery",
      desc: "Home décor delivered via our website, app, and marketplaces like Amazon & Flipkart.",
      features: ["Multi-Channel Access", "Fast Delivery", "Easy Returns"],
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    {
      icon: BookOpen,
      title: "Content-Driven Inspiration",
      desc: "DIY tutorials, styling guides, and trend insights to empower customers.",
      features: ["Expert Tutorials", "Style Guides", "Trend Reports"],
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      iconBg: "bg-pink-500",
      glowColor: "shadow-pink-500/50"
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
    <section ref={sectionRef} className="relative py-24 px-8 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">How We Solve It</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Our Solutions
        </h2>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Innovative approaches to transform your home decor experience
        </p>

        {/* Solutions cards */}
        <div className="space-y-8">
          {solutions.map((sol, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'} hover:scale-[1.02]`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${sol.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content container */}
              <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                {/* Icon section */}
                <div className="flex flex-col items-center md:items-start">
                  <div className={`w-20 h-20 rounded-2xl ${sol.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${hoveredIndex === i ? sol.glowColor + ' shadow-2xl' : 'shadow-lg'}`}>
                    <sol.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-br ${sol.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Text content */}
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${sol.color} bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300 origin-left`}>
                    {sol.title}
                  </h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {sol.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 transition-all duration-300 transform ${hoveredIndex === i ? 'translate-x-2' : ''}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${hoveredIndex === i ? 'text-indigo-600' : 'text-gray-400'} transition-colors duration-300`} />
                        <span className={`text-gray-600 ${hoveredIndex === i ? 'text-gray-900 font-medium' : ''} transition-all duration-300`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <button className={`mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 group/btn ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative corner gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${sol.color} opacity-5 rounded-bl-[100px] transition-opacity duration-500 group-hover:opacity-10`}></div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${sol.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            Experience Our Solutions
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 grid grid-cols-3 gap-2 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-indigo-600 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;