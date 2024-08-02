import React from "react";
import cutlery_1 from "../../src/assets/journal/cutlery_1.jpg"
import cutlery_2 from "../../src/assets/journal/cutlery_2.jpg"
import cutlery_3 from "../../src/assets/journal/cutlery_3.jpg"
import { Link } from "react-router-dom";
export default function Cutlery() {
  return (
    <div>
      {/* Card-1 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={cutlery_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How long does bamboo cutlery last?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
            We compare dishwashers to washing up by hand. From cost to energy
            efficiency and everything in between. As always our analysis and
            blog articles are completely independent and not sponsored by
            anybody. You can trust us to give you the best advice, without bias.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Bamboo Cutlery
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Bamboo Products
            </button>
          </div>
          <p className="text-xs mb-7">22, March 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>


        {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={cutlery_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Benefits of bamboo cutlery
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          What are the benefits of bamboo cutlery? Is bamboo cutlery better than metal or plastic cutlery and why should we use bamboo cutlery at all? In this piece, we run through the top 10 biggest benefits of reusable bamboo utensils and give you some advice on how to keep your set in good condition for longer!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Bamboo Cutlery
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Bamboo products
            </button>
          </div>
          <p className="text-xs mb-7">15, March 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>


      {/* card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={cutlery_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          What is bamboo cutlery?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Our reusable bamboo cutlery is handmade in Vietnam and we want to convince you all to switch now and never use single-use plastic utensils again. In this article we explain what bamboo cutlery is, if it is sustainable and if it's safe!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Bamboo Cutlery
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Bamboo Products
            </button>
          </div>
          <p className="text-xs mb-7">29, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>
  
    </div>
  );
}
