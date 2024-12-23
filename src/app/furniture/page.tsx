"use client";

import Carousel from "../components/carousel";

const images = ["/assets/pc1.avif", "/assets/pc4.jfif", "/assets/pc3.jfif"];

const Home: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-7xl font-bold text-center mt-20 mb-8 font-serif">
          Furnitures
        </h1>

        <Carousel images={images} />
      </div>
      <br />
      <br />

      <div className="flex justify-evenly">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Product Image */}
          <img
            src="/assets/furn1.webp"
            alt="Fans"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> Single Table</div>
            <p className="text-gray-700 text-base">
              Best Quality single metal table with durability
            </p>
          </div>

          {/* Price Section */}
          <div className="px-6 pb-4">
            <span className="text-xl font-semibold text-blue-600">$49.99</span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Product Image */}
          <img
            src="/assets/fur2.webp"
            alt="Earbuds"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cup boards</div>
            <p className="text-gray-700 text-base">
              Best Quality wood cup boards with durability
            </p>
          </div>

          {/* Price Section */}
          <div className="px-6 pb-4">
            <span className="text-xl font-semibold text-blue-600">$39.99</span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Product Image */}
          <img
            src="/assets/fur3.webp"
            alt="bluetooth"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Table</div>
            <p className="text-gray-700 text-base">
              Best Quality wood table with quality and durability
            </p>
          </div>

          {/* Price Section */}
          <div className="px-6 pb-4">
            <span className="text-xl font-semibold text-blue-600">$29.99</span>
          </div>
        </div>
      </div>

      <br />
      <br />
    </main>
  );
};

export default Home;
