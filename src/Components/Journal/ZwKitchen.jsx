import React from 'react'
import sk_1 from '../../src/assets/journal/sk_1.jpg'
import sk_2 from '../../src/assets/journal/sk_2.jpg'
import { Link } from 'react-router-dom'



export default function ZWKitchen() {
  return (
   <div>
    {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={sk_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/zero'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How can we achieve the perfect zero waste kitchen?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          With concerns over global warming & climate change, it is becoming increasingly important to reevaluate the impact we are having on the planet as a result of how much waste we produce. Leading a zero waste lifestyle starting in our kitchen, is a great place to start!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero waste tips
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste Kitchen
            </button>
          </div>
          <p className="text-xs mb-7">October 25, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/zero'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={sk_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/zero'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Ultimate Guide to Washing Up Plastic-Free
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Ever wondered how much water you waste when you're washing up? Have you ever thought about what sponges are made of? Or how about dishwashing vs. hand washing?

In this article we run down the quickest and easiest ways to wash up sustainably.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            How To Guides
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste Kitchen
            </button>
          </div>
          <p className="text-xs mb-7">May 14, 2022</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/zero'>Read More</Link>
          </button>
        </div>
      </div>

   </div>
  )
}
