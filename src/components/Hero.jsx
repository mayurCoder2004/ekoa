import heroImage from "../images/hero_image.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-10 min-h-[60vh] flex flex-col md:flex-row justify-center items-center 
      text-center md:text-left px-6 md:px-16 bg-gradient-to-br from-green-700 via-green-800 
      to-green-900 text-white relative overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-600/20 mix-blend-overlay"></div>

      {/* Left Text Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Ekoa
        </h1>

        <p className="text-lg md:text-xl max-w-xl opacity-90 leading-relaxed">
          Sustainable, handcrafted & premium décor designed to elevate your
          living spaces.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Ekoa Decor"
          className="w-full max-w-md rounded-3xl shadow-2xl object-cover border-4 border-white/20"
        />
      </div>
    </section>
  );
};

export default Hero;
