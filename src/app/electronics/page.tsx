"use client";

import Link from "next/link";
import Carousel from "../components/carousel";
import { Button } from "@/components/ui/button";

const images = [
  "/assets/phone9.jfif",
  "/assets/phone7.jfif",
  "/assets/phone8.jfif",
];

const Home: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-7xl font-bold text-center mt-20 font-serif">
          Android Phones
        </h1>

        <Carousel images={images} />
      </div>
      <div className="flex justify-evenly mt-5">
        <div className="bg-gray-600 inline">
          <img src="/assets/line1.jfif" alt="LED" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Smart LED</strong>
            <br />
            <strong>Rs. 12000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/line2.jfif" alt="USB Fans" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Mini USB Fans</strong>
            <br />
            <strong>Rs. 7000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/line3.jfif" alt="USB Fans" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Refrigerator</strong>
            <br />
            <strong>Rs. 40000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/line4.jfif" alt="USB Fans" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Speaker</strong>
            <br />
            <strong>Rs. 13000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/line5.jfif" alt="USB Fans" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Mini Fan</strong>
            <br />
            <strong>Rs. 15000</strong>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-10">
        <div className="bg-white inline">
          <img src="/assets/bluetooth.png" alt="Bluetooth" />
          <div className="bg-yellow-200 h-20 w-48 pt-2 pl-3">
            <strong>Bluetooth</strong>
            <br />
            <strong>Rs. 12000</strong>
          </div>
        </div>
        <div className="bg-white inline">
          <img src="/assets/bluetooth2.png" alt="Bluetooth" />
          <div className="bg-yellow-200 h-20 w-48 pt-2 pl-3">
            <strong>Android Bluetooth</strong>
            <br />
            <strong>Rs. 7000</strong>
          </div>
        </div>
        <div className="bg-white inline">
          <img src="/assets/watches.png" alt="Watches" />
          <div className="bg-yellow-200 h-20 w-48 pt-2 pl-3">
            <strong>Watches</strong>
            <br />
            <strong>Rs. 4000</strong>
          </div>
        </div>
        <div className="bg-white inline">
          <img src="/assets/fans.png" alt="Fans" />
          <div className="bg-yellow-200 h-20 w-48 pt-2 pl-3">
            <strong>Fans</strong>
            <br />
            <strong>Rs. 13000</strong>
          </div>
        </div>
        <div className="bg-white inline">
          <img src="/assets/earbuds.png" alt="Earbuds" />
          <div className="bg-yellow-200 h-20 w-52 pt-2 pl-3">
            <strong>Earbuds</strong>
            <br />
            <strong>Rs. 15000</strong>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-evenly">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {/* Product Image */}
          <img
            src="/assets/fans.png"
            alt="Fans"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fans</div>
            <p className="text-gray-700 text-base">
              Best Quality Fans with durability
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
            src="/assets/earbuds.png"
            alt="Earbuds"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Earbuds</div>
            <p className="text-gray-700 text-base">
              Wireless Bluetooth with durability
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
            src="/assets/bluetooth.png"
            alt="bluetooth"
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bluetooth</div>
            <p className="text-gray-700 text-base">
              Wireless Bluetooth with durability
            </p>
          </div>

          {/* Price Section */}
          <div className="px-6 pb-4">
            <span className="text-xl font-semibold text-blue-600">$29.99</span>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="ml-[40%] ">
        <Link href="/">
          <Button className="h-16 w-44 text-2xl font-bold transition duration-300 ease-in-out hover:bg-blue-600 text-center">
            Shop Now
          </Button>
        </Link>
      </div>
      <br />
      <br />
    </main>
  );
};

export default Home;
