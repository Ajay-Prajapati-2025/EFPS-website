import React from "react";
import razor_1 from "../../src/assets/journal/razor_3.jpg";
import razor_2 from "../../src/assets/journal/razor_1.jpg";
import gift_1 from "../../src/assets/journal/gift_1.jpg";
import dish from "../../src/assets/journal/dishwasher.jpg";
import gift_2 from "../../src/assets/journal/gift_2.jpg";
import eat_1 from "../../src/assets/journal/eat_1.jpg";
import kitchen_1 from "../../src/assets/journal/kitchen_1.jpg";
import candle_1 from "../../src/assets/journal/candle_1.jpg";
import { Link } from "react-router-dom";




export default function AllActivities() {

  return (
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-col items-center">
      {/* All categories cards */}

      {/* Card-1 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={razor_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to="/razor">
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            Can you shave your pubic hair with a safety razor?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
            We look at whether the humble safety razor is a good tool for
            shaving downstairs. What are your other options and do shaving
            techniques differ between men and women?
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
              <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
                Sustainable Lifestyle
              </button>
              <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
                Sustainable shaving
              </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to="/razor">Read More</Link>
          </button>
          
          
        </div>
      </div>




      {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={gift_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Discover Green Giving: Your Ultimate Guide to Eco-Friendly Gifts at Unbeatable Discounts
          </h1>
          </Link>
          

          <p className=" text-gray-500 text-lg sm:text-xl">
          Discover a unique collection of sustainable brands offering beautiful gifts that protect the planet and help your loved ones make a positive impact this Christmas. With time limited offers for Jungle Culture customers!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Products
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link to='/'>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={razor_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          What`s the difference between a long handle and short handle safety razor?
          </h1>
          </Link>
          

          <p className=" text-gray-500 text-lg sm:text-xl">
          Should you use a long or short handled safety razor and why? What's the difference?  <br />

We'll go through the key differences between long and short handled safety razors and suggest which razor is most suitable for you.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable Lifestyle
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-4 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={gift_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How to Open a Gift Shop in the UK
          </h1>
          </Link>
          

          <p className=" text-gray-500 text-lg sm:text-xl">
          Opening a gift store or retail store of any kind can be stressful, so our team have done the research for you and put together this handy guide that runs through, step-by-step everything you need to know to open a gift shop in the UK.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Products
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              How to Guide
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-5 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={dish} className="h-96  object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            Dishwasher vs. Hand-washing Dishes: Which is better?
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
              Zero waste kitchen
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-6 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={eat_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Zero Waste - How to start?
          </h1>
          </Link>
          

          <p className=" text-gray-500 text-lg sm:text-xl">
          How can I become more zero waste? Lot's of people ask us the same question, so we thought we would write a short article with some quick and easy to follow tips. Zero waste does not need to be expensive. Be sustainable today!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Tips
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              How to Guide
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-7 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={kitchen_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How to make DIY washing up liquid at home
          </h1>

          <p className=" text-gray-500 text-lg sm:text-xl">
          In this guide we teach you how to make washing up liquid at home in 3 simple steps and with just a handful of inexpensive ingredients. We then undergo a cost comparison to show you the difference in price between homemade and store-bought!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste kitchen
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              How to Guide
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Tips
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link>Read More</Link>
          </button>
        </div>
      </div>

      {/* card-8 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={candle_1} className="h-96  object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Do Candles Relieve Stress?
          </h1>
          </Link>
          

          <p className=" text-gray-500 text-lg sm:text-xl">
          We all sense that candles reduce stress in some capacity, but how? What is it about candles that relaxes our bodies and minds? <br />

We examine why exactly candles help us to relax and give some top tips on how to maximise the benefit from your candles!..
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable Lifestyle
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Coconut Products
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            <Link>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
