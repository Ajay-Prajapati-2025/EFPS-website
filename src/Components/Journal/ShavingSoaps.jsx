import React from 'react'
import ss_1 from '../../src/assets/journal/ss_1.jpg'
import ss_2 from '../../src/assets/journal/ss_2.jpg'
import ss_3 from '../../src/assets/journal/ss_3.jpg'
import ss_4 from '../../src/assets/journal/ss_4.jpg'
import { Link } from 'react-router-dom'

export default function ShavingSoaps() {
  return (
   <div>
    {/* Card-1 */}
    <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={ss_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/soap'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Are Women’s Razors More Expensive?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          We dig deep and find out if women's razors really are more expensive than men's. Does the pink tax still exist? Or has price disparity between genders evened out?

We take a look at popular razor brands to find out more.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Shaving soap
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
          </div>
          <p className="text-xs mb-7">November 24, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/soap'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-2 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={ss_2} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/soap'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How to Get Rid of Shaving Rash on Legs
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Razor burns and shaving rashes are completely avoidable and yet, they're one of the most common problems people experience when shaving!

Learn how to avoid, prevent and treat razor burn in this ultimate guide to safe shaving!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Shaving soap
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
          </div>
          <p className="text-xs mb-7">June 01, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/soap'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-3 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={ss_3} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/soap'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Do you need a brush to use shaving soap?
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Can shaving soap be used without a brush or is a shaving brush absolutely necessary? We walk through everything you need to shave with shaving soap + we give a few extra tips on how to shave the traditional way!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Shaving soap
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
          </div>
          <p className="text-xs mb-7">April 17, 2022</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/soap'>Read More</Link>
          </button>
        </div>
      </div>

      {/* Card-4 */}
      <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={ss_4} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
        <Link to='/soap'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          How To Shave Without Shaving Cream
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Is it possible to shave without shaving products? We tried and tested some different methods using common household products to answer the question, can you shave without shaving cream?

Find out how to make your own shaving gel, or what you can use as a makeshift alternative to traditional shaving cream in a moment of crisis!
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            How To Guides
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Shaving soap
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Sustainable shaving
            </button>
          </div>
          <p className="text-xs mb-7">October 15, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/soap'>Read More</Link>
          </button>
        </div>
      </div>
   </div>
  )
}
