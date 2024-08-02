import React from 'react'
import hg_1 from '../../src/assets/journal/hg_1.jpg'
import hg_2 from '../../src/assets/journal/hg_2.jpg'
import hg_3 from '../../src/assets/journal/hg_3.jpg'
import hg_4 from '../../src/assets/journal/hg_4.jpg'
import { Link } from 'react-router-dom'

export default function HowGuide() {
  return (
    <div>
         {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={hg_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How to Open a Gift Shop in the UK
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Opening a gift store or retail store of any kind can be stressful, so our team have done the research for you and put together this handy guide that runs through, step-by-step everything you need to know to open a gift shop in the UK.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Eco friendly wholesale

            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              
How To Guides
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste Business Guides
            </button>
          </div>
          <p className="text-xs mb-7">September 08, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={hg_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            
Zero Waste : How to start?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          How can I become more zero waste? Lot's of people ask us the same question, so we thought we would write a short article with some quick and easy to follow tips. Zero waste does not need to be expensive. Be sustainable today!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            How To Guides
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero waste tips
            </button>
          </div>
          <p className="text-xs mb-7">June 28, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={hg_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How to make DIY washing up liquid at home
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          In this guide we teach you how to make washing up liquid at home in 3 simple steps and with just a handful of inexpensive ingredients. We then undergo a cost comparison to show you the difference in price between homemade and store-bought!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            How To Guides

            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste DIY

            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste Kitchen
            </button>
          </div>
          <p className="text-xs mb-7">22, April 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-4 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={hg_4} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Ultimate Guide to Washing Up Plastic-Free
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Ever wondered how much water you waste when you're washing up? Have you ever thought about what sponges are made of? Or how about dishwashing vs. hand washing?

In this article we run down the quickest and easiest ways to wash up sustainably + give recommendations on products that you ﻿need﻿﻿ to buy to wash your dishes guilt-free!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste Kitchen

            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            How To Guides
            </button>
          </div>
          <p className="text-xs mb-7">16, june 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
