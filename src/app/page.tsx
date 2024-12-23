"use client";

import Image from "next/image";

import About from "./about/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main>

      <div className="bg-pink-200 h-72 w-full flex items-center justify-between  mt-10 rounded-3xl">
        <div className="ml-44 mt-10 mb-56 h-[48px] w-full">
          <Image
            src="/assets/discount1.png"
            alt="watches"
            height={48}
            width={900}
          />
        </div>
      </div>

      <div className="ml-7 mt-5">
        <p>
          <strong>
            Grab the best deal on
            <span className="text-blue-600 underline"> Electronics</span>
          </strong>
        </p>
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

      <div className="ml-7 mt-5">
        <p>
          <strong>
            Shop From
            <span className="text-blue-600 underline"> Top Categories</span>
          </strong>
        </p>
      </div>

      <div className="flex justify-evenly mt-5">
        <div className="bg-gray-600 inline">
          <img src="/assets/food1.jfif" alt="Nuggets" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Chicken Nuggets</strong>
            <br />
            <strong>Rs. 4000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/food2.jfif" alt="Pizza Dough" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Pizza Dough Blend</strong>
            <br />
            <strong>Rs. 1200</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/food3.jfif" alt="Burger" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Classic Burger</strong>
            <br />
            <strong>Rs. 700</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/food4.jfif" alt="Samosa" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Vegetable Samosa</strong>
            <br />
            <strong>Rs. 130</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/food5.jfif" alt="Samosa" />
          <div className="bg-yellow-200 h-20 w-56 pt-2 pl-3">
            <strong>Chicken Samosa</strong>
            <br />
            <strong>Rs. 1500</strong>
          </div>
        </div>
      </div>

      <br />

      <div className="ml-7 mt-5">
        <p>
          <strong>
            Top
            <span className="text-blue-600 underline"> Categories</span>
          </strong>
        </p>
      </div>

      <br />
      <div className="flex justify-evenly mt-5 ">
        <div className="bg-gray-600 inline">
          <img src="/assets/phone7.jfif" alt="Phones" />
          <div className="bg-yellow-200 h-20 w-[64] pt-2 pl-3">
            <strong>Android Phones</strong>
            <br />
            <strong>Rs. 12000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/herowatches.jfif" alt="Card" />
          <div className="bg-yellow-200 h-[37%] w-[74] pt-2 pl-3">
            <strong>Watches</strong>
            <br />
            <strong>Rs. 15000</strong>
          </div>
        </div>

        <div className="bg-gray-600 inline">
          <img src="/assets/phone8.jfif" alt="Phone" />
          <div className="bg-yellow-200 h-[44%] w-[74] pt-2 pl-3">
            <strong>Android Phones</strong>
            <br />
            <strong>Rs. 13000</strong>
          </div>
        </div>
      </div>

      <br />

      <div className="ml-7 mt-5">
        <p>
          <strong>
            Shop Now
            <span className="text-blue-600 underline"> Fresh Nuts</span>
          </strong>
        </p>
      </div>

      <div className="flex justify-evenly mt-5 ">
        <div className="bg-gray-600 inline">
          <img src="/assets/fruit.webp" alt="Nuts" />
          <div className="bg-yellow-200 h-20 w-66 pt-2 pl-3">
            <strong>Mix Dry Fruits</strong>
            <br />
            <strong>Rs. 4000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/fruit2.webp" alt="Nuts" />
          <div className="bg-yellow-200 h-20 w-66 pt-2 pl-3">
            <strong>6 Pack Nuts</strong>
            <br />
            <strong>Rs. 12000</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/fruit3.webp" alt="Nuts" />
          <div className="bg-yellow-200 h-20 w-66 pt-2 pl-3">
            <strong>Apricots</strong>
            <br />
            <strong>Rs. 700</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/fruit4.webp" alt="Nuts" />
          <div className="bg-yellow-200 h-[31%] w-64 pt-2 pl-3">
            <strong>Nutritional Seeds</strong>
            <br />
            <strong>Rs. 1300</strong>
          </div>
        </div>
        <div className="bg-gray-600 inline">
          <img src="/assets/fruit5.webp" alt="Nuts" />
          <div className="bg-yellow-200 h-[25%] w-68 pt-2 pl-3">
            <strong>Wallnuts</strong>
            <br />
            <strong>Rs. 1500</strong>
          </div>
        </div>
      </div>
      <br />

      <br />

      <div className="ml-[40%] ">
        <Link href="/electronics">
          <Button className="h-16 w-44 text-2xl font-bold transition duration-300 ease-in-out hover:bg-blue-600 text-center">
            Shop Now
          </Button>
        </Link>
      </div>
      <br />
      <br />
    </main>
  );
}
