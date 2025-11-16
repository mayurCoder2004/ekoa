import { TrendingUp, Target, Percent, ArrowUpRight, DollarSign, LineChart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ProfitGrowth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const profits = [
    { 
      year: "Year 1", 
      amount: "₹9.5 lakh",
      numericValue: 9.5,
      margin: "51%",
      growth: "Foundation",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      iconBg: "bg-green-500",
      glowColor: "shadow-green-500/50"
    },
    { 
      year: "Year 2", 
      amount: "₹16.5 lakh",
      numericValue: 16.5,
      margin: "55%",
      growth: "+74% YoY",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-500",
      glowColor: "shadow-teal-500/50"
    },
    { 
      year: "Year 3", 
      amount: "₹28 lakh",
      numericValue: 28,
      margin: "62%",
      growth: "+70% YoY",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/50"
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
            
            setAnimatedValues(profits.map(item => 
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
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Profitability Forecast</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Projected Profit Growth
        </h2>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Strong margins driving <span className="font-bold text-green-600">195% profit growth</span> with improving efficiency
        </p>

        {/* Profit cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profits.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with glow effect */}
                <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${isVisible ? item.glowColor + ' shadow-2xl' : 'shadow-lg'}`}>
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                {/* Year and margin badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-900">{item.year}</span>
                  <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold shadow-md`}>
                    <Percent className="w-3 h-3" />
                    {item.margin} Margin
                  </div>
                </div>

                {/* Animated profit amount */}
                <div className="mb-6">
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110 origin-left`}>
                    ₹{animatedValues[i].toFixed(1)}L
                  </div>
                  <div className="text-base text-gray-500 font-medium">
                    {item.amount} profit
                  </div>
                </div>

                {/* Growth indicator */}
                {i > 0 ? (
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-current border-opacity-20 mb-6 group-hover:scale-105 transition-transform`}>
                    <ArrowUpRight className={`w-5 h-5 ${item.iconBg.replace('bg-', 'text-')}`} />
                    <span className={`text-sm font-bold ${item.iconBg.replace('bg-', 'text-')}`}>
                      {item.growth}
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 border border-gray-200 mb-6">
                    <Target className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-bold text-gray-600">
                      {item.growth}
                    </span>
                  </div>
                )}

                {/* Circular progress indicator */}
                <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${(item.numericValue / 28) * 100}%` : '0%',
                      transitionDelay: `${500 + i * 150}ms`
                    }}
                  ></div>
                </div>

                {/* Relative to max indicator */}
                <div className="text-xs text-gray-500 mt-2 text-right">
                  {Math.round((item.numericValue / 28) * 100)}% of Year 3 target
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${item.color} opacity-5 rounded-tr-full group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Profit margin trend visualization */}
        <div className={`relative bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 mb-12 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Profit Margin Expansion</h3>
            <p className="text-gray-600">Improving operational efficiency year over year</p>
          </div>
          
          <div className="flex items-end justify-around h-64 gap-4">
            {profits.map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group">
                <div className="relative w-full max-w-32 mb-4">
                  <div 
                    className={`w-full bg-gradient-to-t ${item.color} rounded-t-2xl transition-all duration-1000 ease-out shadow-lg group-hover:shadow-2xl relative overflow-hidden`}
                    style={{ 
                      height: isVisible ? `${(item.numericValue / 28) * 240}px` : '0px',
                      transitionDelay: `${800 + i * 150}ms`
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000"></div>
                    
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                        {item.amount}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                        {item.margin} margin
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

        {/* Key metrics dashboard */}
        <div className={`grid md:grid-cols-4 gap-6 transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: TrendingUp, label: 'Total Profit', value: '₹54L', desc: '3-Year Cumulative', color: 'from-green-500 to-emerald-600' },
            { icon: Percent, label: 'Avg. Margin', value: '56%', desc: 'Strong Profitability', color: 'from-teal-500 to-cyan-600' },
            { icon: LineChart, label: 'CAGR', value: '71%', desc: 'Profit Growth Rate', color: 'from-blue-500 to-indigo-600' },
            { icon: Target, label: 'ROI', value: '195%', desc: 'Year 1 to Year 3', color: 'from-indigo-500 to-purple-600' }
          ].map((metric, i) => (
            <div key={i} className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
              <metric.icon className="w-8 h-8 mb-3 opacity-90" />
              <div className="text-sm font-semibold opacity-90 mb-1">{metric.label}</div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-80">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute top-20 left-20 grid grid-cols-4 gap-2 opacity-10">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default ProfitGrowth;