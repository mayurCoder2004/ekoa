import { TrendingUp, BarChart3, Zap, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const RevenueGrowth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const data = [
    { 
      year: "Year 1", 
      amount: "₹18.5 lakh",
      numericValue: 18.5,
      growth: "Base Year",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/50"
    },
    { 
      year: "Year 2", 
      amount: "₹30 lakh",
      numericValue: 30,
      growth: "+62% Growth",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-500",
      glowColor: "shadow-purple-500/50"
    },
    { 
      year: "Year 3", 
      amount: "₹45 lakh",
      numericValue: 45,
      growth: "+50% Growth",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      iconBg: "bg-pink-500",
      glowColor: "shadow-pink-500/50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate numbers
          const duration = 2000;
          const steps = 60;
          const increment = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setAnimatedValues(data.map(item => 
              Math.min(item.numericValue * progress, item.numericValue)
            ));
            
            if (step >= steps) clearInterval(timer);
          }, increment);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Financial Forecast</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Projected Revenue Growth
        </h2>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Strategic expansion targeting <span className="font-bold text-purple-600">143% growth</span> over 3 years
        </p>

        {/* Revenue cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Year badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${item.iconBg} bg-opacity-10 border border-current border-opacity-20 mb-6`}>
                  <Zap className={`w-4 h-4 ${item.iconBg.replace('bg-', 'text-')}`} />
                  <span className={`text-sm font-bold ${item.iconBg.replace('bg-', 'text-')} uppercase tracking-wide`}>
                    {item.year}
                  </span>
                </div>

                {/* Animated revenue amount */}
                <div className="mb-4">
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110 origin-left`}>
                    ₹{animatedValues[i].toFixed(1)}L
                  </div>
                  <div className="text-lg text-gray-500 font-medium">
                    {item.amount}
                  </div>
                </div>

                {/* Growth indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {i > 0 && (
                    <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform`}>
                      <ArrowUpRight className="w-4 h-4" />
                      {item.growth}
                    </div>
                  )}
                  {i === 0 && (
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      {item.growth}
                    </div>
                  )}
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${(item.numericValue / 45) * 100}%` : '0%',
                      transitionDelay: `${500 + i * 150}ms`
                    }}
                  ></div>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Target', value: item.amount },
                    { label: 'Timeline', value: `${i + 1} Year${i > 0 ? 's' : ''}` }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center p-3 rounded-xl bg-gray-50 group-hover:bg-white/50 transition-colors">
                      <div className="text-xs text-gray-500 font-medium mb-1">{metric.label}</div>
                      <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Visual growth chart representation */}
        <div className={`relative bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 mb-12 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-end justify-around h-64 gap-4">
            {data.map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group">
                <div className="relative w-full max-w-32 mb-4">
                  <div 
                    className={`w-full bg-gradient-to-t ${item.color} rounded-t-2xl transition-all duration-1000 ease-out shadow-lg group-hover:shadow-2xl`}
                    style={{ 
                      height: isVisible ? `${(item.numericValue / 45) * 240}px` : '0px',
                      transitionDelay: `${800 + i * 150}ms`
                    }}
                  >
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.amount}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900">{item.year}</div>
                <div className="text-sm text-gray-500">{item.growth}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key insights banner */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: TrendingUp, label: 'CAGR', value: '56%', desc: 'Compound Annual Growth' },
            { icon: BarChart3, label: 'Total Revenue', value: '₹93.5L', desc: '3-Year Projection' },
            { icon: Sparkles, label: 'Growth Rate', value: '143%', desc: 'Year 1 to Year 3' }
          ].map((insight, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <insight.icon className="w-8 h-8 mb-3 text-cyan-400" />
              <div className="text-sm font-semibold text-gray-400 mb-1">{insight.label}</div>
              <div className="text-3xl font-bold mb-1">{insight.value}</div>
              <div className="text-sm text-gray-400">{insight.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    </section>
  );
};

export default RevenueGrowth;