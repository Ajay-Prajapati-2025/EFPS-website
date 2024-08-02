import React from 'react'
import wt_1 from '../../src/assets/journal/wt_1.jpg'
import wt_2 from '../../src/assets/journal/wt_2.jpg'
import wt_3 from '../../src/assets/journal/wt_3.jpg'
import { Link } from 'react-router-dom'


export default function ZWTips() {
  return (
    <div>
        {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={wt_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/zero'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            
How to Throw a Sustainable Party (Tips & Checklist)
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          The ultimate eco-friendly party checklist! No need for a party planner with Jungle Culture's guide to throwing an eco party. From kid's birthdays to fancy dinner parties with friends, we've got you covered whatever kind of soirée you're thinking of putting on!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero Waste DIY

            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero waste tips
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/zero'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={wt_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/zero'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Are Single-Use Plastics Still Banned in 2020?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          We delve deeper into what impact the coronavirus has had on single-use plastics, the plastic ban in Europe and consumer attitudes.

Will the coronavirus mean that single-use plastics are no longer banned in 2020? Find out more here!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero waste tips
            </button>
          </div>
          <p className="text-xs mb-7">August 28, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/zero'>Read More</Link>
          </button>
        </div>
      </div>


      {/* Card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={wt_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/zero'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Are zero waste shops expensive or cheaper?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Are zero waste stores expensive? How can I be eco-friendly and save money? We tackle these questions and give some pro tips in today's post!

We also look at the best products for making some quick and easy changes to a plastic-free lifestyle.


          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Zero waste tips
            </button>
          </div>
          <p className="text-xs mb-7">November 19, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/zero'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
