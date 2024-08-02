import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CommentMe from "./CommentMe";

export default function Life() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col  gap-5">
        <Link to="/blogs">
        <FaArrowLeft className=" flex flex-col items-start justify-start bg-gray-200 size-12 p-3 hover:text-blue-600 rounded-full" />
      </Link>
      <h1 className="font-semibold text-lg sm:text-2xl">Keep your conscience clean and your soap bars green</h1>
<h2 className='font-semibold'>TLDR</h2>
<p className='leading-8'>

We don’t need greenwash. We need organic, vegan, palm oil free wash. Our natural soap bars are SLS free, cruelty free, and as kind to your skin as they are to the planet. <br />

The function of soap is to keep you clean. But what’s the use of stepping out the tub polished and scrubbed, if we’re leaving behind a wake of planetary destruction? That’s one sure-fire way to deflate your bubble bath. <br />

Is it possible to find a natural soap bar that’s good for you, good for people, and good for the planet? In short, yes it is. Beyond the intoxicating scents and invigorating scrubs, our chemical-free soap bars are vegan, cruelty-free, and organic. Our soaps are proudly plastic free to keep you in the eco-friendly lifestyle you work so hard to maintain, and your skin will thank you for nourishing it with coconut oil, and not a hint of SLS or palm oil. <br />

Ticking all the green boxes in one go can be a tough job, so we’ve done the hard work for you. Your time is much better spent soaking up the great outdoors and nurturing your inner eco warrior. <br />
</p>
<h2 className='font-semibold'>The dirt on SLS</h2>
<p className='leading-8'>
Sodium Lauryl Sulphate, otherwise known as SLS, is often viewed with a healthy dose of suspicion by anyone interested in natural body care. This chemical is a popular ingredient in soaps, toothpastes, and shampoos, and creates the lather we’re all used to. But for anyone with sensitive skin, it can be a real cause for concern. <br />

Should you be worried? Most scientists agree that SLS is safe to use. However, complications arise when skin concerns are thrown into the mix, as some evidence shows that SLS can make conditions worse. Take a study from the University of Bath, where researchers found that the SLS in a cream used to treat eczema actually worsened the skin condition. The scientists found that the chemical thins the protective barrier of the skin, allowing more chemicals to get in, which causes irritation. That’s nothing to take lightly, when eczema affects around 10% of people globally. <br />

At Jungle Culture, we like to keep things natural, so we don’t use SLS. Our soap base is made from coconut oil and sodium hydroxide (also known as lye), which is a key ingredient in the soap-making process. Once it’s gone through the curing process, the sodium hydroxide dissolves and won’t be found in the finished product. <br />
</p>
<h2 className='font-semibold'>For the love of orangutans</h2>
<p className='leading-8'>
Another ingredient you won’t find on a Jungle Culture ingredients list is palm oil, which is often used to make soap. <br />

Palm oil can be a nasty business. Orangutans, tigers, and elephants are losing their forest homes as deforestation rips through their land to make way for huge oil palm plantations, where they’re unable to survive. Indigenous communities like Sumatra’s Orang Rimba tribe have also been forced from their land. There are now more than 15 million hectares of oil palm plantations worldwide - that’s an area nearly five times the size of Belgium. <br />

It need not be this way. There’s plenty of debate about whether palm oil can ever be sustainable, but while there are alternatives, where the planet is respected and crops aren’t grown in nature-damaging monocultures, we’d rather take that road. <br />

We don’t use palm oil. At all. While you work up a lather with your shaving soap bar, rest in the knowledge that you’re keeping palm oil out of your bathroom, and out of your life. <br />
</p>
<h2 className='font-semibold'>Ingredients that don’t cost the Earth</h2>
<p className='leading-8'>
As you get scrubby with a natural exfoliant soap bar, you might wonder what goes into your soap. <br />

Our natural soaps are made from cold-pressed coconut oil. The responsibly-sourced coconuts come from a farm in the Mekong Delta in Vietnam. Each coconut is hand harvested from trees that produce around 120 coconuts a year, grown without the use of damaging pesticides. While the region faces huge challenges due to the climate crisis, coconuts have the incredible ability to adapt to the changing landscape. <br />

Coconut oil isn’t just kinder to the planet, it’s also full of benefits for your skin. Slick it over your body for a hit of hydration, leaving your skin deeply moisturised. What’s more, coconut oil is brilliant at killing off bacteria - exactly what you want from a soap. It can also calm down inflammation, with some studies showing that it helps treat eczema. And there’s no harm in dreaming about tropical beaches as you breathe in the sweet, creamy scent. <br />

But there’s more to Jungle Culture soap than coconut oil. Take the ground coffee beans from the Coffee Scrub bar, which are carefully sourced from across Vietnam. Or the essential oils like ginger, kaffir lime, and yuzu, all of which are completely organic. <br />

And most importantly, none of our ingredients come from animals. It’s pure plant power.
</p>
      <CommentMe />
    </div>
  )
}
