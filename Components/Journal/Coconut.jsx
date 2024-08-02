import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CommentMe from "./CommentMe";

export default function Coconut() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col  gap-5">
      <Link to="/blogs">
        <FaArrowLeft className=" flex flex-col items-start justify-start bg-gray-200 size-12 p-3 hover:text-blue-600 rounded-full" />
      </Link>
      <h1 className="font-semibold text-lg sm:text-2xl">
        How are coconut bowls made?
      </h1>
      <p className="leading-8">
        Firstly, here is a step-by-step guide to how our coconut bowls are
        created. Our coconut shell candles are created in a vastly similar way,
        except we add a blend of vegan friendly soy candle wax: <br />
        The coconut are picked and transported to a sorting facility where the
        meat and milks are harvested, mainly for beauty products. <br />
        After the meat and milk has been removed we sort the shells based on
        size, thickness and colour. <br />
        The inside of the coconut is then scraped to get rid of any remaining
        meat and the outside husk is pulled off and sanded down. <br />
        The bowls are extensively sanded on the outside and inside to create a
        nice smooth effect, after which we polish the bowls using organic virgin
        coconut oil, sourced locally. This is what gives the bowls their
        distinct shine. <br />
        Our patterned bowls are then etched with unique designs by local
        craftsmen, providing more employment opportunities in the local
        communities. <br />
      </p>
      <h1 className="font-semibold text-lg sm:text-2xl">
        Where do coconut bowls come from?
      </h1>
      <p className="leading-8">
        Most coconut bowls, coconut cups & coconut shell tea light holders,
        including the ones made by Jungle Culture are produced in one small
        place in the world. Hailed as the coconut region of Vietnam, ‘Ben Tre’
        is where a lot of the world’s coconuts are farmed. <br />
        The vast majority of coconuts that are farmed in Ben Tre are used for
        their oils, milks and meat. In times gone by the shells were simply
        burned at the end of every harvest to make room for the new crops. But
        this has changed with the advent of coconut bowls! <br />
        Now, instead of wasting the bowls. Farmers can make use of them by
        removing the meat and the husk and smoothening the sides down. <br />
        Once smoothened the bowls are sent to local artisan workshops where they
        are further shaped and engraved with various patterns or logos. <br />
        This is pretty much start to finish how a coconut bowl is created!
        Amazingly natural right? <br />
      </p>

      <h1 className="font-semibold text-lg sm:text-2xl">
        Where to buy coconut bowls?
      </h1>
      <p className="leading-8">
        So, do different brands make them in different ways? How do we know
        which brand to buy from? <br />
        The answer is that most brands make coconut bowls in the same way, but
        the difference is found in the thickness and quality of the coconut.{" "}
        <br />
        Coconut shells come in an array of different shapes and sizes. Some have
        a thin crust, whilst others are thick, sturdy and durable. The trick to
        making a long-lasting and beautiful coconut bowl is finding a farm that
        produces thick and strong coconuts. <br />
        Before you buy a set of coconut bowls… read some reviews and do your
        research! Bowls made in Indonesia or China are normally made using a
        different species of coconut that isn’t well suited to bowls. Vietnamese
        coconuts however are famed for their durability. <br />
        So why should I use coconut bowls in the first place? What makes them
        better than say ceramic or metal bowls? <br />
        Coconut bowls are made by farmers in impoverished conditions and buying
        them supports communities that desperately need help in order to
        develop. Your purchase is really important to these farmers for the
        stability of their livelihoods. <br />
        Aside from this coconut bowls are no better than ceramic bowls! Ceramic
        bowls are great! But you don’t need to choose one or the other. You can
        support the farmers in Vietnam and your local ceramic workshop and have
        a collection of beautiful bowls for your home! <br />
        If you agree with what we’ve written or have anything to add, comment
        below! We would love to hear from you! Or if you'd like to find out how
        to make coconut shell candles, we've produced a handy guide for that
        too! <br />
        And if you own a shop or café and are interested in using or selling our
        bowls. Get in touch via our dedicated coconut bowls wholesale page.{" "}
        <br />
      </p>
      <CommentMe />
    </div>
  );
}
