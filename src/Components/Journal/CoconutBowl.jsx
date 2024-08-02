import React from 'react'
import coco_1 from "../../src/assets/journal/coco_1.jpg"
import coco_2 from "../../src/assets/journal/coco_2.jpg"
import coco_3 from "../../src/assets/journal/coco_3.jpg"
import coco_4 from "../../src/assets/journal/coco_4.jpg"
import { Link } from 'react-router-dom'


export default function CoconutBowl() {
  return (
    <div>
        {/* Card-1 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={coco_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/coconut'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Are Coconut Bowls Safe to Eat From?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Are coconut bowls safe to eat from? Are they hygienic? And what happens when coconut bowls are exposed to extreme heat and extreme cold?

We answer these coconut questions and more in our latest article examining how food safe coconut bowls are.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Coconut Bowls
            </button>
          </div>
          <p className="text-xs mb-7">July 17, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/coconut'>Read More</Link>
          </button>
        </div>
      </div>


        {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={coco_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/coconut'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">  
How long do coconut bowls last?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          We love coconut bowls, and we know you do too, so here are some top tips on how to make your bowls last for longer. 
We also explain what makes our coconut bowls so special and give you some ideas on what to use your bowls for.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Coconut Bowls
            </button>
          </div>
          <p className="text-xs mb-7">June 13, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/coconut'>Read More</Link>
          </button>
        </div>
      </div>


      {/* card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={coco_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/coconut'>
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
          <Link to='/coconut'>Read More</Link>
          </button>
        </div>
      </div>
     

      {/* card-4 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={coco_4} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/coconut'>
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
          <Link to='/coconut'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
