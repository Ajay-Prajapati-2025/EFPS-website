import React from 'react'
import bp_1 from "../../src/assets/journal/bp_1.jpg"
import bp_2 from "../../src/assets/journal/bp_2.jpg"
import bp_3 from "../../src/assets/journal/bp_3.jpg"
import { Link } from 'react-router-dom'


export default function BambooProducts() {
  return (
    <div>
    {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={bp_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Can bamboo be recycled?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Can bamboo be recycled? In this bamboo recycling guide we look at the most eco-friendly and sustainable ways to recycle bamboo. We explain how to dispose of bamboo products sustainably and finally we go step-by-step through some of the most common bamboo products to teach you how to recycle them!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Products
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              How To Guide
            </button>
          </div>
          <p className="text-xs mb-7">December 06, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>


        {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={bp_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Which reusable straws are best?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          A pros and cons list for reusable straws. The straw ban will be upon us in 2020 so what should we do? Here are our top recommendations!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Kitchen
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Bamboo Products
            </button>
          </div>
          <p className="text-xs mb-7">November 18, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>


      {/* card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={bp_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/bamboo'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Can bamboo be grown in the UK?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Jungle Culture explores whether bamboo can be grown in the UK, EU or US and whether it would be commercially viable, scalable and most importantly sustainable!
We also run through the steps you need to take if you want to grow your own bamboo in your home, garden or farm.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Tips
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Bamboo Cutlery
            </button>
          </div>
          <p className="text-xs mb-7">November 16, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/bamboo'>Read More</Link>
          </button>
        </div>
      </div>
      
    </div>
  )
}
