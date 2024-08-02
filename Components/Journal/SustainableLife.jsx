import React from 'react'
import sl_1 from '../../src/assets/journal/sl_1.jpg'
import sl_2 from '../../src/assets/journal/sl_2.jpg'
import sl_3 from '../../src/assets/journal/sl_3.jpg'
import { Link } from 'react-router-dom'

export default function LifeStayle() {
  return (
    <div>
  {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={sl_1} className="w-96 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Is zero waste a trend?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          The zero waste movement has been gaining momentum for several years now and we couldn't be happier! But is zero waste actually sustainable? Could zero waste be a fleeting trend or is it here to stay? We look at how the movement got started and why zero waste is important.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable Lifestyle
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste tips
            </button>
          </div>
          <p className="text-xs mb-7">August 05, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={sl_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            
How to become an eco-friendly influencer
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Here at Jungle Culture we love to support fledging eco entrepreneurs! That's why we've written a step-by-step guide explaining how to become an eco-friendly influencer. 

We go through the process of becoming an influencer, what to expect when you become one and how to partner with brands like us to increase your following!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable Lifestyle
            </button>
          </div>
          <p className="text-xs mb-7">July 09, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={sl_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            
7 Reasons not to fear your safety razor
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Shaving has become hugely expensive over the past few decades. But it's not just customers paying the price to shave, it's the environment too! 

In this article we explore 7 of the biggest reasons why everybody should be ditching single-use plastic razors and switching to eco-friendly safety razors. 


          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable Lifestyle
            </button>
          </div>
          <p className="text-xs mb-7">June 01, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
