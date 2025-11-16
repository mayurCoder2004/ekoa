import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Content */}
      <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300 cursor-default">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium">Sustainable Living</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>
            Ekoa
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-50 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Transforming everyday spaces into inspiring environments with{' '}
          <span className="font-semibold text-white">sustainable</span>,{' '}
          <span className="font-semibold text-white">stylish</span> and{' '}
          <span className="font-semibold text-white">high-quality</span> decor.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-lg hover:shadow-xl hover:scale-105">
            Explore Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Stats or features */}
        <div className={`flex flex-wrap justify-center gap-8 mt-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { value: '10K+', label: 'Happy Customers' },
            { value: '100%', label: 'Sustainable' },
            { value: '500+', label: 'Products' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </button>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;