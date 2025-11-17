import { Rocket, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 bg-green-50 relative overflow-hidden">
      {/* Soft glowing background shapes */}
      <div className="absolute w-96 h-96 bg-green-300/40 blur-3xl rounded-full top-10 -right-20"></div>
      <div className="absolute w-80 h-80 bg-green-200/40 blur-3xl rounded-full bottom-10 -left-16"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-8 tracking-tight">
          About Ekoa
        </h2>

        {/* Investor-Friendly Intro */}
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
          Ekoa is a design-led, technology-enabled home décor brand focused on
          making sustainable and meaningful décor accessible to modern Indian
          households. We combine craftsmanship, eco-conscious materials, and
          digital innovation to create décor experiences that are both
          aesthetically refined and deeply personal.
        </p>

        {/* Three USP Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-green-200 text-center">
            <Rocket
              size={42}
              className="text-green-700 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-green-800">
              Design + Technology
            </h3>
            <p className="text-gray-700 mt-3">
              Ekoa blends artistic design with modern digital tools, enabling
              efficient personalization, discovery, and curated shopping
              experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-green-200 text-center">
            <Leaf
              size={42}
              className="text-green-700 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-green-800">
              Sustainable & Conscious
            </h3>
            <p className="text-gray-700 mt-3">
              Our products are crafted using eco-conscious materials and
              handmade techniques, supporting a more sustainable and responsible
              décor ecosystem.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-green-200 text-center">
            <Users
              size={42}
              className="text-green-700 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-green-800">
              Creator & Artisan Centric
            </h3>
            <p className="text-gray-700 mt-3">
              We work closely with artisans and creators, giving local talent a
              platform to showcase authentic, story-rich décor to a wider
              audience.
            </p>
          </div>
        </div>

        {/* Vision Line */}
        <p className="text-gray-700 text-lg mt-16 max-w-3xl mx-auto leading-relaxed">
          Our vision is to build a trusted, scalable home décor platform that
          brings sustainability, creativity, and craftsmanship
          together—empowering customers to design living spaces that truly feel
          like home.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
