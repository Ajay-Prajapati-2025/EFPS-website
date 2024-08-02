import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CommentMe from "./CommentMe";
import candle_3 from "../../src/assets/journal/candle_3.jpg";
import c_1 from "../../src/assets/journal/c_1.jpg";
import c_2 from "../../src/assets/journal/c_2.jpg";
import c_3 from "../../src/assets/journal/c_3.jpg";
import c_4 from "../../src/assets/journal/c_4.jpg";

export default function Candle() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col  gap-5">
      <Link to="/blogs">
        <FaArrowLeft className=" flex flex-col items-start justify-start bg-gray-200 size-12 p-3 hover:text-blue-600 rounded-full" />
      </Link>
      <img src={candle_3} className="w-1/2 h-auto flex flex-col mx-auto"/>
      <h1 className="font-semibold text-lg sm:text-2xl">
        Are candles eco-friendly?
      </h1>
      <p className="leading-8">
        Candles have long been known to reduce stress, create ambience and help
        us nod off to sleep, their existence dates back to 500BC when the Romans
        used tallow to create dipped candles. But the question remains. Are
        candles eco-friendly? Are candles bad for the environment? Do candles
        emit Co2? <br />
        The answer may depend on your perspective, but as with humans, not all
        candles are created equal. Some candles are made using natural
        ingredients, whilst some are made primarily from crude oil by-products.
        In order to properly assess whether candles are sustainable we have to
        look one-by-one at the different types of candle wax.. <br />
      </p>

      <h1 className="font-semibold text-lg sm:text-2xl">
        What types of candles are there?
      </h1>
      <p className="leading-8">
        Candles can be made from lots of different things, animal fats, coconut
        oil etc. But these types of candles are less common, so let’s take a
        look at the main categories of candles: <br />
        Paraffin wax by far the most common type of candle on the market <br />
        Beeswax candles <br />
        Microcrystalline wax <br />
        Gel candles <br />
        Soy candles <br />
        Now let’s go through them one-by-one and analyse how eco-friendly each
        type of candle is. At the end we will breakdown other elements of
        candles, such as their container, wick and essential oils to give a
        thorough overview of the sustainable attributes of a candle. <br />
      </p>

      <h1 className="font-semibold text-lg sm:text-2xl">
        Which types of candles are eco-friendly and which types are not
        eco-friendly?
      </h1>
      <p className="leading-8">
        Paraffin wax candles <br />
        Paraffin wax candles are by far the most common type of candle on the
        market. Go into any large supermarket, department store or most online
        retailers and you’ll be able to find paraffin wax candles. <br />
        The positives of paraffin wax are that it gives a slow and consistent
        burn to any candle. It truly is the perfect wax for making candles if
        you completely ignore the environmental impact! <br />
        ​​One 2009 study found that burning paraffin wax releases potentially
        dangerous chemicals, such as toluene. <br />
        However, the study was never published in a peer-reviewed journal, and
        the National Candle Association and European Candle Association raised
        questions about the study’s reliability. This may mean that although
        paraffin candles are not eco-friendly, they have not yet been proven to
        be dangerous. <br />
        According to a statement released by the European Candle Association,
        “They have provided no data for review, and their conclusions are based
        on unsupported claims. No reputable scientific study has ever shown any
        candle wax, including paraffin, to be harmful to human health.” <br />
        Paraffin wax is made from petroleum (crude oil), which is a
        non-renewable resource that requires intensive machinery to mine and
        refine. By definition, as a non-renewable resource paraffin wax is not
        sustainable and therefore it most certainly is not environmentally
        friendly. <br />
      </p>
      <img src={c_1} className="w-1/2 h-auto flex flex-col mx-auto"/>
      <h1 className="font-semibold text-lg sm:text-2xl">Beeswax Candles</h1>
      <p className="leading-8">
        There is a strong argument to say that beeswax candles are eco-friendly,
        sustainable and ethical. Firstly, beeswax is a renewable resource
        produced naturally and no chemicals whatsoever are needed to cultivate
        it. <br />
        Beeswax is biodegradable, organic and some (mostly beeswax companies)
        argue that when burned, beeswax releases ions that actually clean the
        air. Although, we looked extensively and could not find a scientific
        study to support this claim. (If any beeswax candle makers would like to
        provide some evidence to support this, we’re all ears). <br />
        Additionally, beeswax has been used alongside tallow for centuries to
        make candles, proving that it’s an efficient and effective substitute
        for tallow (animal fats) or for paraffin wax. <br />
        However… <br />
        Is beeswax vegan, no. Not according to Vegan Friendly Org UK. <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">Why isn’t beeswax vegan?</h1>
      <p className="leading-8">
        Let’s explain. We need to start by pointing out that honey is
        essentially food for bees. <br />
        Bees take nectar from flowers which they hold in their stomachs. When
        they return to their lovely hives, a worker bee draws the nectar out and
        chews it, breaking down the enzymes before storing the nectar by-product
        (honey) in honeycombs where it remains until they need sustenance.{" "}
        <br />
        The bees then make a small amount of beeswax to preserve the honey for
        when it’s needed. Normally during the colder winter months. <br />
        For bees to produce 1lb of beeswax, they need to use 15-22lbs worth of
        honey. To harvest the beeswax, beekeepers must also farm the honey.
        Taking this much honey from bees leaves them vulnerable in the winter
        months when they need food and contributes to hive collapse disorder.{" "}
        <br />
        There is an organisation in the US that practices “bee-centric”
        beekeeping, meaning that the beekeepers only do what’s best for the
        bees, not what’s best for profits. Here is a quote from one such
        beekeeper: <br />
        “If you’re a vegan for animal ethics then I would definitely say no to
        honey. And even if you are not a vegan, I would always say no to
        commercial honey that you buy in the stores because the practices are
        not sustainable and not kind to bees, just like all modern husbandry
        practices.” <br />
        “It is difficult to find beeswax from small local suppliers”, “most
        beeswax comes from commercial beekeepers.” <br />
        Supporting commercial beekeeping and the production of honey and beeswax
        cannot be considered vegan and many bee-centric beekeepers argue that
        it’s contributing to the declining bee population. <br />
        There is however a contradiction in all of this. If we can’t use beeswax
        for fear of being unethical, then what about avocados, cherries, almonds
        and other products where bees have been exploited in order to produce
        them? <br />
        Sadly, we don’t have the answer and all we can do is lay out the facts.
        The decision ultimately is for each and every one of us to make. All in
        all, beeswax candles and other beeswax products definitely have less
        impact on the environment than say paraffin wax candles, but they’re not
        vegan and in order to make beeswax, bees need to be exploited (in most
        cases). <br />
        Interested in learning more about how beeswax is made? Check out this
        video by the BBC. <br />
      </p>
      <img src={c_2} className="w-1/2 h-auto flex flex-col mx-auto"/>
      <h1 className="font-semibold text-lg sm:text-2xl">Microcrystalline wax</h1>
      <p className="leading-8">
        Microcrystalline wax is a common substitute for paraffin wax. The only
        notable difference between the two types of waxes are that
        microcrystalline wax has fine crystals and its darker in colour. It is
        made from petroleum and not sustainable, but it is completely safe for
        use in candles and no studies have ever found it to be dangerous. <br />
        Are microcrystalline wax candles eco-friendly? It’s a hard no from us.{" "}
        <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">Gel Wax</h1>
      <p className="leading-8">
        Gel candles gained popularity due to their vibrant and versatile colours
        and the fact that candle makers can embed small items into the candles,
        making them look fun and festive! <br />
        Sadly, gel wax is also made from a petroleum-based by-product and
        although it may look bright, colourful and all-round harmless, it’s
        actually just as bad for the environment as paraffin candles. <br />
        Are gel candles eco-friendly? The answer, sadly, is no. <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">Soy wax candles</h1>
      <p className="leading-8">
        Finally we come to soy wax candles. Here at Jungle Culture, our range of
        coconut shell candles are made using soy wax. You might think this makes
        us biased and willing to say or write anything to make you believe that
        our candles are the most eco-friendly! <br />
        Well, the truth is, like all of the candles mentioned on our list, soy
        has its advantages and disadvantages. Are soy wax candles eco-friendly?
        We’ll give you the facts and you can decide for yourself! <br />
        Although the soya bean is a natural product and can be grown
        organically, there is much debate around whether or not soy wax can
        accurately be called “organic”. Normally, soy wax is processed using
        chemicals although every supplier creates soy wax using slightly
        different methods which are often kept secret. <br />
        This means that the process by which soy wax is created is not 100%
        eco-friendly and organic and it’s difficult to know exactly how much
        chemicals are used in the production as soy wax manufacturers keep this
        info close to their chests! <br />
      </p>
      <img src={c_3} className="w-1/2 h-auto flex flex-col mx-auto"/>
      <h1 className="font-semibold text-lg sm:text-2xl">Which type of candle is the most eco-friendly?</h1>
      <p className="leading-8">
        As a company Jungle Culture prides itself on honesty and transparency,
        which is why we are happy to say that beeswax candles are certainly the
        lowest impact candles on the market when it comes to the environment.{" "}
        <br />
        However, on this issue we stand firmly with the bees and although
        beeswax candles are the most eco-friendly candle on the market, they are
        also the only non-vegan candle and arguably the most cruel which is why
        we use only soy wax in our candles, despite the manufacturing process
        being unnatural. <br />
        There is however more to candles than just the wax. So read on and let’s
        examine the eco credentials of other parts of the humble candle! <br />
      </p>

      <h1 className="font-semibold text-lg sm:text-2xl">
        All candles burn. Isn’t burning bad for the environment? Do candles emit
        Co2 when they burn?
      </h1>
      <p className="leading-8">
        Although strong, reliable studies do not exist for every type of candle,
        paraffin wax candles emit around 10g of Co2 every hour. Meaning that a
        standard sized candle may emit between 30-50g of Co2 over the course of
        its lifetime. <br />
        This sounds like a relatively small amount, and that’s because it is.
        Although in general, Co2 emissions and emitting carbon dioxide is a bad
        thing as too much Co2 increases the temperature on Earth, a small amount
        of Co2 emissions generated from humans could be considered acceptable as
        Co2 is a necessary part of our planet’s life. Without it temperatures
        would plunge to beyond freezing. <br />
        In fact, plants require a certain amount of Co2 for photosynthesis.
        Without some Co2 we’d all be doomed! <br />
        Now, we’re not saying forget about emissions and start flying a jumbo
        jet to work, we’re just saying that as humans we do not need to be
        perfect. We need to be better. <br />
        In our opinion, the burning of candles is an acceptable level of
        emissions, but if you feel that 10g/per hour of Co2 emissions is too
        much, consider this… <br />
        A standard flight from London to New York generates around 986kg of Co2
        emissions with an additional 1,877kg of Co2 created by “other warming
        effects from your flight”. <br />
        This roughly equates to 286,300 hours of candle burning. If you want to
        take a stand against emissions, we’re pretty sure there are more
        effective ways to do it! <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">Are essential oils eco-friendly?</h1>
      <p className="leading-8">
        Essential oils are one of the principal ingredients used in candle
        making. They are 100% natural and derived from various plants, fruits
        and nuts. <br />
        Much like candle wax and humans, not all essential oils are born equal.
        Some essential oils such as rose require 40-60 rose buds to produce a
        single drop of essential oil. This means that it takes a whopping 600
        pounds of rose buds to produce a single ounce of rose essential oil.{" "}
        <br />
        When you factor in all of the water and labour that goes into growing
        and processing so many roses, you start to see the problem! <br />
        Conversely, citrus fruits such as lime are practically fountains of
        essential oils. Lime is so generous with it’s oils that the discussion
        of sustainability barely warrants a mention! <br />
      </p>
      <img src={c_4} className="w-1/2 h-auto flex flex-col mx-auto"/>
      <h1 className="font-semibold text-lg sm:text-2xl">Is candle making eco-friendly?</h1>
      <p className="leading-8">
        The process of making candles is relatively simple as we explain in our
        guide on how to make coconut shell candles. If you want to try it for
        yourselves, head on over to our article for a thorough walkthrough!{" "}
        <br />
        In short, whether candle making is sustainable or not depends entirely
        on which ingredients you choose to use. If you make candles with a
        natural wax and sustainable essential oils then you don’t have to worry
        too much! <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">How about the other elements of a candle? The wick? The jar? </h1>
      <p className="leading-8">
        In the past candle makers used lead as a stiffening agent in order to
        help wicks stand up without assistance. Nowadays, this is relatively
        uncommon and most high-quality candles have natural wicks. <br />
        Candle jars themselves are principally made from glass which is a
        recyclable material and according to Glass Alliance Europe it is
        recycled 80% of the time. Our coconut shell candles are made using
        coconut husks that would have otherwise been used as firewood, so
        up-cycling them as candle jars actually prevents them from creating
        emissions. They are also 100% natural, biodegradable and compostable.{" "}
        <br />
      </p >
      <h1 className="font-semibold text-lg sm:text-2xl">Conclusion:</h1>
      <p className="leading-8">
        Candles, much like humans are not perfect, none of them are! As with
        most things, whether candles are eco-friendly or not depends on your
        personal opinion and definition of the often ambiguous phrase
        “eco-friendly”. <br />
        What we will say is that although some may argue that beeswax candles
        are unethical or that soy candles are not natural, there’s no denying
        that they are more sustainable than the alternatives. <br />
        So for now, we advise anyone who is in need of relaxation and serenity
        to go ahead, light up a candle, draw a bath, take out your favourite
        book and enjoy! Just make sure it’s either soy or beeswax! <br />
      </p>
      <CommentMe />
    </div>
  );
}
