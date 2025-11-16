const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden"
    >

      {/* Soft Overlay Glow */}
      <div className="absolute inset-0 bg-green-600/20 mix-blend-overlay"></div>

      {/* Floating Background Circle */}
      <div className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-3xl -top-20 -left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-green-400/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Ekoa
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed">
          Sustainable, handcrafted & premium décor designed to elevate your living spaces.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-green-700 font-semibold rounded-full 
          shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
