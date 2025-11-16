const Mission = () => {
  return (
    <section
      id="mission"
      className="py-24 px-8 max-w-6xl mx-auto bg-white relative"
    >
      {/* Soft background accent */}
      <div className="absolute w-72 h-72 bg-green-100 rounded-full blur-3xl -top-10 -left-10 opacity-60"></div>

      {/* Section Heading */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">
          Our Mission
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl">
          Our mission is to transform ordinary spaces into inspiring environments by
          combining sustainability, craftsmanship, and premium design. We create décor that
          not only elevates spaces but also respects nature — delivered through a seamless,
          customer-first shopping experience.
        </p>

        {/* Decorative bottom line */}
        <div className="w-24 h-1 bg-green-600 rounded-full mt-6"></div>
      </div>
    </section>
  );
};

export default Mission;
