import React from 'react'
import coco_3 from "../../src/assets/journal/coco_3.jpg"
import coco_4 from "../../src/assets/journal/coco_4.jpg"
import { Link } from 'react-router-dom'

export default function HealthyEating() {
  return (
    <div>
        {/* Card-1 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={coco_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          8 Great immunity boosting foods
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Here is a quick list of 8 foods that can be easily added to smoothies, smoothie bowls and salad bowls that help boost your immunity and enrich your body with vitamins.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Healthy Eating
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Coconut Bowls
            </button>
          </div>
          <p className="text-xs mb-7">March 21, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>


        {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={coco_4} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/life'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          5 Simple & healthy smoothie bowl recipes for your coconut bowls!
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          5 Healthy, Simple smoothie bowl recipes for March! All of the recipes included in this blog take under 15mins to prepare and every one of them is vegan!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Coconut Bowls
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Healthy Eating
            </button>
          </div>
          <p className="text-xs mb-7">March 02, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/life'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
