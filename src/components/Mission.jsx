import { Target, Leaf, Sparkles, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-friendly materials that care for our planet',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: Sparkles,
      title: 'Stylish',
      description: 'Contemporary designs that elevate any space',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Premium craftsmanship built to last',
      color: 'from-red-400 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section badge */}
        <div className={`flex justify-center mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Target className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Our Mission</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Transforming Spaces,
          <br />
          Inspiring Lives
        </h2>

        {/* Mission statement */}
        <p className={`text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto mb-16 text-gray-700 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Our mission is to transform everyday spaces into inspiring environments by providing{' '}
          <span className="font-semibold text-indigo-600">sustainable</span>,{' '}
          <span className="font-semibold text-purple-600">stylish</span>, and{' '}
          <span className="font-semibold text-pink-600">high-quality</span> decor through a seamless one-stop shopping experience.
        </p>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border ${value.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 delay-${300 + index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 ${value.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or quote */}
        <div className={`text-center transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-lg text-gray-700 italic mb-2">
              "Every space tells a story. Let us help you tell yours."
            </p>
            <p className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              — The Ekoa Team
            </p>
          </div>
        </div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-indigo-400 rounded-full"></div>
        ))}
      </div>
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-purple-400 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default Mission;