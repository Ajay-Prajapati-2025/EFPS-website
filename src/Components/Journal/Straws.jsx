import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CommentMe from "./CommentMe";

export default function Straws() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col  gap-5">
        <Link to="/blogs">
        <FaArrowLeft className=" flex flex-col items-start justify-start bg-gray-200 size-12 p-3 hover:text-blue-600 rounded-full" />
      </Link>
      <h1 className="font-semibold text-lg sm:text-2xl">Which reusable straw should I use?</h1>
<p>
2020 is nearly upon us… And countries in Europe are gearing up to swap from plastic straws to their reusable alternatives as single-use plastic straws will be officially banned! So which type of reusable straw is the best. Let’s look at the main alternatives, bamboo straws, stainless steel straws and glass straws.

So, without further adieu…
</p>

<h1 className="font-semibold text-lg sm:text-2xl">Bamboo Straws:</h1>
<p className="leading-8">
Bamboo straws or Jungle Straws are naturally grown and depending where you buy them can be 100% organic. The are strong, long-lasting and make you feel like you are sipping a mojito in a small Mexican beach town… Possibly the biggest benefit!

So let’s break down the pros and cons:

<h2 className='font-semibold'>Pros for bamboo:</h2>

<h2 className='font-semibold'>Completely natural :</h2> If you buy them from the right company then they will be 100% organic. No nasty chemicals and very minimal impact on the Earth 

<h2 className='font-semibold'>Reusable a lot of times :</h2>  I have had a set of bamboo straws for over a year now and they are still going strong. Natural bamboo straws need a bit more love and care than stainless steel, but if you wash them and dry them after using, then a set of 12 can last for years.

<h2 className='font-semibold'>Completely biodegradable :</h2>  Don’t want them anymore? One broke when your son trod on it? No problem! The best thing about bamboo is that it is completely biodegradable. You can simply throw it in the garden and it will provide nourishment for the soil.

<h2 className='font-semibold'>Paradise feeling :</h2>  Who doesn’t dream of retiring to the Maldives or Bora Bora? Well.. it may not be the tropical paradise that you are craving, but a cocoktail with an organic bamboo straw is better than nothing!

<h2 className='font-semibold'>Cons for bamboo:</h2>

<h2 className='font-semibold'>Durability :</h2>  Bamboo is strong, but stainless steel is stronger.

<h2 className='font-semibold'>Limited colour options :</h2>  Bamboo is all natural… And that is pretty much the extent of the colour choices. Although Jungle Straws do offer coloured pouches which helps.

<h2 className='font-semibold'>Verdict:</h2> The most sustainable straw by a mile. If you are seeking a truly zerowaste alternative to plastic then this is your best bet. Bamboo is organic, sustainable and biodegradable. 
</p>
<h1 className="font-semibold text-lg sm:text-2xl">Stainless Steel Straws:</h1>
<p className="leading-8">
Stainless steel straws come in a variety of styles and colours. They are beautiful, stylish and perfect for adding flare to a drink.

<h2 className='font-semibold'>Pros for steel:</h2>

<h2 className='font-semibold'>Infinitely reusable :</h2> Stainless steel is the most durable straw alternative there is. Whilst putting bamboo and glass straws in the dishwasher can damage them or reduce their lifespan, stainless steel marches on. They are easy to clean and practically invincible.

<h2 className='font-semibold'>Stylish and Sleek:</h2> Stainless steel straws come in all kinds of different colours, some with bamboo cases for portability and some with beautiful jute pouches. They are truly the most stylish straw for those instagrammable drinks we all love. 

<h2 className='font-semibold'>Cons for Steel:</h2>

<h2 className='font-semibold'>Not Biodegradable :</h2> Reusable stainless steel straws are not strictly low-impact. Stainless steel takes a lot of energy to make and they are biodegradable. If you are the sort of person that like to throw out and buy again, this may not be the option for you, although they are recyclable! 

<h2 className='font-semibold'>Not for Hot Drinks :</h2> Whilst bamboo straws do not conduct heat, making them perfect for coffee, tea and other hot delights. Stainless steel is a heat conductor and should not be used with hot drinks. Although most of us only use straws for cold drinks our research has shown that as much as 20% of people use their reusable straws at home with hot drinks… So be careful with steel!

<h2 className='font-semibold'>Verdict:</h2> Best for reusability and durability. If you only plan on buying once, a quality set of stylish stainless steel straws could be the choice for you.
</p>
<h1 className="font-semibold text-lg sm:text-2xl">Glass Straws</h1>
<p className="leading-8">
Glass straws are see-through, pretty cool and reusable. They aren’t made in different colours and they aren't zerowaste straws, but it’s nice to see the drink you are slurping!

<h2 className='font-semibold'>Pros for glass:</h2>

<h2 className='font-semibold'>Long-lasting :</h2> Glass straws may not be as indestructible as stainless steel, but if you don’t crush your straw then it should serve you well for at least a year. 

<h2 className='font-semibold'>Transparency :</h2> It’s a great feeling to see your smoothie slowly creep towards you. I don’t know why, but it just is!

<h2 className='font-semibold'>Cons for glass: </h2>

<h2 className='font-semibold'>Style Factor :</h2> Glass straws don’t have the colour options that stainless steel does, and so far we haven’t been able to find a company offering different coloured cases. But maybe this will change…

<h2 className='font-semibold'>Breakable : </h2> Glass straws are relatively safe, but they can be broken and the shards can be a little bit sharp. Not the best option for people with kids. 

<h2 className='font-semibold'>Verdict:</h2> A great alternative to plastic, not as solid as stainless steel and not as cool as bamboo. But still a great straw! 
</p>
      <CommentMe />
    </div>
  )
}
