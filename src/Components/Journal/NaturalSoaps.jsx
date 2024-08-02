import React from 'react'
import ns_1 from "../../src/assets/journal/ns_1.jpg"
import { Link } from 'react-router-dom'

export default function NaturalSoaps() {
  return (
    <div>
       {/* Card-1 */}
       <div className="flex flex-col sm:flex-row border border-black mb-6 mx-3 sm:mx-auto mt-10">
        <img src={ns_1} className="h-80 object-cover" />
        <div className="w-full flex flex-col p-3 sm:mx-7 gap-2 justify-center items-start">
          <Link to='/soap'>
          <h1 className="text-blue-600 text-xl sm:text-2xl">
          Join the natural soap bar revolution
          </h1>
          </Link>

          <p className=" text-gray-500 text-lg sm:text-xl">
          Keep your conscience clean and your soaps green and join the natural soap bar revolution! Jungle Culture's range of organic soap bars are available now! 
Learn more about how we source our soaps and how they're produced.

          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste soaps
            </button>
            <button className="bg-slate-200 text-slate-700 px-1 sm:px-2 sm:py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
            Natural Soaps 
            </button>
          </div>
          <p className="text-xs mb-7">April 01, 2023</p>
          <button className="bg-blue-600 text-white font-semibold w-1/3 sm:w-1/6 p-1 sm:p-2 rounded-lg sm:rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
          <Link to='/soap'>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
