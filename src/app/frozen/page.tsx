import { Button } from "@/components/ui/button";
import Link from "next/link";

function Frozenfood () {
    return(

        <main>

<div className="flex justify-evenly mt-16">
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
      <br />


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
        <Link href="/">
          <Button className="h-16 w-44 text-2xl font-bold transition duration-300 ease-in-out hover:bg-blue-600 text-center">
            Shop Now
          </Button>
        </Link>
      </div>
<br /><br />


        </main>
    )
}

export default Frozenfood;