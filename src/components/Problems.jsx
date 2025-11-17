import hygine from "../images/problems/hygine.jpg";
import time from "../images/problems/time.jpg";
import affordability from "../images/problems/affordability.jpg";
import eco_friendly from "../images/problems/eco_friendly.jpg";
import culture from "../images/problems/culture.jpg";
import globally_reach from "../images/problems/globally_reach.jpg";

const Problems = () => {
  const items = [
    {
      text: "Hygiene concerns, inconsistent service quality & lack of trust.",
      image: hygine,
    },
    {
      text: "Time-consuming & fragmented décor shopping experience.",
      image: time,
    },
    {
      text: "Affordable décor often lacks quality.",
      image: affordability,
    },
    {
      text: "Limited access to eco-friendly & handmade décor.",
      image: eco_friendly,
    },
    {
      text: "Lack of cultural & artistic value.",
      image: culture,
    },
    {
      text: "Growing demand for globally inspired décor items.",
      image: globally_reach,
    },
  ];

  return (
    <section id="problems" className="py-24 px-6 bg-green-50">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-14 tracking-tight">
        Problems We Solve
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-2xl transition-all"
          >
            {/* Image Wrapper */}
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt="Problem"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-5">
              <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problems;
