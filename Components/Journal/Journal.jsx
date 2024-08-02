import React from "react";
import img4 from "../../src/assets/journal/sky.jpg";
import dish from "../../src/assets/journal/dishwasher.jpg";
import { useNavigate } from 'react-router-dom';

export default function Journal() {

    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const value = event.target.value;
      if (value) {
        navigate(value);
      }
    };

  return (
    <div>
      <img
        src={img4}
        alt="Nature image"
        className="w-full sm:w-full h-96 object-cover "
      />
      <div class="absolute inset-0 flex items-center justify-center max-w-6xl mx-auto mb-48">
        <h1 class="text-black text-3xl font-bold tracking-normal text-center">
          Be an advocate for all things green with our zero waste journal
          that'll help you integrate organic, eco-friendly and sustainable
          alternatives into your everyday life.
        </h1>
      </div>

      {/* Blog and categories section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between items-center p-5 mt-5">
          <h1 className="text-3xl font-semibold">Blogs</h1>
          <select className="block w-1/3 p-2 text-xl font-semibold mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={handleChange}>
            <option value="">All Categories</option>
            <option value="/cutlery">Bamboo Cutlery</option>
            <option value="/bamboo">Bamboo Products </option>
            <option value="/coconut">Coconut Bowl</option>
            <option value="/candle">Coconut Shell Candles</option>
            <option value="/ethical-sorcing">Ethical Sourcing</option>
            <option value="/gift-guide">Gift Guide</option>
            <option value="/healthy-eating">Healthy Eating</option>
            <option value="/bamboo">How to grow bamboo</option>
            <option value="/How-to-guide">How To Guide</option>
            <option value="/interviews">Interviews</option>
            <option value="/soaps">Natural Soaps</option>
            <option value="/pruduct-guide">Product Care Guide</option>
            <option value="/recipes">Recipes</option>
            <option value="/straws">Reusable Starws</option>
            <option value="/soap">Shaving Soaps</option>
            <option value="/How to guide">How To Guide</option>
            <option value="/life">Sustainable Lifestyle</option>
            <option value="/shaving">Sustainable shaving</option>
            <option value="/waste-business">Zero Waste Business Guides</option>
            <option value="/waste-cleaning">Zero Waste Cleaning</option>
            <option value="/waste-diy">Zero Waste DIY</option>
            <option value="/waste-kitchen">Zero Waste Kitchen</option>
            <option value="/waste-product">Zero Waste Products</option>
            <option value="/waste-swaps">Zero Waste Swaps</option>
            <option value="/waste-tips">Zero Waste Tips</option>
            <option value="/waste-travel">Zero Waste Travel</option>
          </select>
        </div>
      </div>

      {/* Card-1 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6 mt-10">
        <img src={dish} className="h-80 object-cover" />
        <div className="w-full flex flex-col mx-7 gap-2 justify-center items-start">
          <h1 className="text-blue-600 text-2xl">
            Dishwasher vs. Hand-washing Dishes: Which is better?
          </h1>

          <p className=" text-gray-500 text-xl">
            We compare dishwashers to washing up by hand. From cost to energy
            efficiency and everything in between. As always our analysis and
            blog articles are completely independent and not sponsored by
            anybody. You can trust us to give you the best advice, without bias.
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-1">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-2 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-3 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-4 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-5 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-6 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-7 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>

      {/* card-8 */}
      <div className="max-w-6xl mx-auto flex flex-row border border-black mb-6">
        <img
          src="https://jungleculture.eco/cdn/shop/articles/zero-waste-pot-scrubbers_600x.jpg?v=1697026001"
          className="h-80 object-cover"
        />
        <div className="w-full flex flex-col mx-7 gap-3 justify-center items-start">
          <h1 className="text-blue-600 text-2xl ">Title</h1>
          <p className=" text-gray-500 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dolor consequatur excepturi eos aliquam ducimus quod ab quasi vel.
            Distinctio eos fugit cumque asperiores molestiae accusantium nisi
          </p>
          <div className="flex flex-row gap-2 text-xs font-semibold mb-2">
            <button className="bg-slate-200 text-slate-700 px-2 py-1 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
            <button className="bg-slate-200 text-slate-700 px-2 hover:bg-slate-600 hover:text-white border border-slate-300 rounded-md tracking-wide">
              Zero waste
            </button>
          </div>
          <p className="text-xs mb-7">13, May 2024</p>
          <button className="bg-blue-600 text-white font-semibold w-1/6 p-2 rounded-full hover:text-black border hover:border-blue-600 hover:bg-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
