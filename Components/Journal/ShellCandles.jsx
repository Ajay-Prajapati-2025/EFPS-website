import React from 'react'
import candle_1 from "../../src/assets/journal/candle_1.jpg"
import candle_2 from "../../src/assets/journal/candle_2.jpg"
import candle_3 from "../../src/assets/journal/candle_3.jpg"
import { Link } from 'react-router-dom'

export default function ShellCandles() {
  return (
    <div>
        {/* Card-1 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={candle_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/candle'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How To Make Coconut Shell Candles
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          How to make coconut shell candles! There's been a lot of buzz around our range of coconut shell candles and many of our more 'crafty' customers have been enquiring about how to make their own!

Here is a step-by-step guide on how to diy make a coconut bowl candle. 
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste Kitchen
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              How to Guide
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Coconut shell Candle
            </button>
          </div>
          <p className="text-xs mb-7">May 27, 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/candle'>Read More</Link>
          </button>
        </div>
      </div>


        {/* card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto ">
        <img src={candle_2} className="h-96 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/candle'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
            
Are candles eco-friendly?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          There are many different types of candles, from jarred candles that are distributed to shops around the world, to mum and pop operations who make candles as a hobby. During this article we investigate which candles (if any) are sustainable and ethical. 

We assess each type of candle as well as the ingredients that go into making candles and answer the question: Are candles eco-friendly?
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Coco shell candles
            </button>
          </div>
          <p className="text-xs mb-7">August 02, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/candle'>Read More</Link>
          </button>
        </div>
      </div>


      {/* card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto">
        <img src={candle_1} className="h-96 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/candle'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Do Candles Relieve Stress?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          We all sense that candles reduce stress in some capacity, but how? What is it about candles that relaxes our bodies and minds?

We examine why exactly candles help us to relax and give some top tips on how to maximise the benefit from your candles!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Coconut Shell Candles
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Sustainable Lifestyle
            </button>
          </div>
          <p className="text-xs mb-7">December 30, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/candle'>Read More</Link>
          </button>
        </div>
      </div>
  
    </div>
  )
}
