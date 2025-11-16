const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden"
    >
      {/* Soft Overlay Glow */}
      <div className="absolute inset-0 bg-green-600/20 mix-blend-overlay"></div>

      {/* Background Ambient Blobs */}
      <div className="absolute w-60 h-60 bg-green-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-green-400/10 rounded-full blur-3xl bottom-10 right-0 animate-pulse"></div>

      {/* Floating Decorative Elements */}
      <div className="floating-item w-6 h-6 bg-green-300/40 rounded-full absolute top-16 left-10"></div>
      <div className="floating-item w-5 h-5 bg-green-100/40 rounded-full absolute top-32 left-1/4"></div>
      <div className="floating-item w-7 h-7 bg-green-200/40 rounded-full absolute top-48 left-1/2"></div>

      <div className="floating-item w-4 h-4 bg-green-300/40 rounded-full absolute top-20 right-10"></div>
      <div className="floating-item w-6 h-6 bg-green-100/50 rounded-full absolute top-40 right-1/4"></div>
      <div className="floating-item w-5 h-5 bg-green-200/40 rounded-full absolute top-56 right-1/2"></div>

      <div className="floating-item w-5 h-5 bg-green-300/40 rounded-full absolute bottom-36 left-10"></div>
      <div className="floating-item w-7 h-7 bg-green-400/40 rounded-full absolute bottom-20 left-1/3"></div>

      <div className="floating-item w-4 h-4 bg-green-200/40 rounded-full absolute bottom-32 right-10"></div>
      <div className="floating-item w-6 h-6 bg-green-300/40 rounded-full absolute bottom-16 right-1/4"></div>

      <div className="floating-item w-5 h-5 bg-green-200/50 rounded-full absolute bottom-28 left-1/2"></div>
      <div className="floating-item w-8 h-8 bg-green-400/50 rounded-full absolute bottom-12 right-1/2"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Ekoa
        </h1>

        <p className="text-lg md:text-xl max-w-2xl opacity-90 leading-relaxed">
          Sustainable, handcrafted & premium décor designed to elevate your
          living spaces.
        </p>

        <button
          className="mt-8 px-8 py-4 bg-white text-green-700 font-semibold rounded-full 
          shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
