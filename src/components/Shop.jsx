import { useState } from "react";
import metalwall from "../images/metal wall.jpg";
import horse from "../images/horse.jpg";
import timestand from "../images/time stand.jpg";
import roomwall from "../images/Living Room Wall Niche Ideas.jpeg";

import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";
import img6 from "../images/image6.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Metal Wall Art",
      price: "₹1,499",
      image: metalwall,
      description: "Handcrafted metal wall art",
    },
    {
      id: 2,
      name: "Horse Standing Statue",
      price: "₹2,999",
      image: horse,
      description: "Horse with uplifted legs statue",
    },
    {
      id: 3,
      name: "Time Stand",
      price: "₹1,799",
      image: timestand,
      description: "Time stand decoration piece",
    },
    {
      id: 4,
      name: "Living Room Walls",
      price: "₹999",
      image: roomwall,
      description: "Elegant living room wall décor",
    },
  ];

  const images = [img1, img2, img3, img4, img5, img6];

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const handleBuyClick = (productName, quantity) => {
    alert(`Added ${quantity} "${productName}" to cart!`);
  };

  return (
    <section
      id="shop"
      className="py-24 px-8 bg-linear-to-b from-white to-green-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Showcase FIRST */}
        <h3 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Our Handcrafted Décor Showcase
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">
              <img
                src={src}
                className="w-full h-64 object-cover hover:scale-110 transition-all duration-500"
                alt={`decor-${i}`}
              />
            </div>
          ))}
        </div>

        {/* Shop SECTION AFTER Showcase */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 tracking-tight">
            Our Shop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of handcrafted, sustainable home
            décor items.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative overflow-hidden bg-gray-200 h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs mb-3">
                  {product.description}
                </p>
                <p className="text-green-700 font-bold text-base mb-3">
                  {product.price}
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, -1)}
                    className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 font-semibold text-sm">
                    −
                  </button>

                  <span className="flex-1 text-center font-semibold text-gray-900 text-sm">
                    {quantities[product.id] || 1}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(product.id, 1)}
                    className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 font-semibold text-sm">
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    handleBuyClick(product.name, quantities[product.id] || 1)
                  }
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-1.5 px-4 rounded transition-colors text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
