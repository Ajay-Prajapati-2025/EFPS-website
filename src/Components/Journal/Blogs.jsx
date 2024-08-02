import React from "react";
import { useState } from "react";
import img4 from "../../src/assets/journal/sky.jpg";
import BambooProducts from "./BambooProducts";
import Cutlery from "./Cutlery";
import AllActivities from "./AllActivities";
import CoconutBowl from "./CoconutBowl";
import ShellCandles from "./ShellCandles";
import HealthyEating from "./HealthyEating";
import NaturalSoaps from "./NaturalSoaps";
import ReusableStraws from "./ReusableStraws";
import ShavingSoaps from "./ShavingSoaps";
import HowGuide from "./HowGuide";
import LifeStayle from "./SustainableLife";
import ZWKitchen from "./ZwKitchen";
import ZWProducts from "./ZwProducts";
import ZWTips from "./ZwTips";

const componentsMap = {
  cutl: Cutlery,
  bp: BambooProducts,
  coco :CoconutBowl,
  candle: ShellCandles,
  eat: HealthyEating,
  ns: NaturalSoaps,
  rs: ReusableStraws,
  ss: ShavingSoaps,
  hg: HowGuide,
  sl: LifeStayle,
  sk: ZWKitchen,
  wp: ZWProducts,
  wt: ZWTips,
};

export default function Blogs() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleSelectChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const SelectedComponent = componentsMap[selectedComponent];

  return (
    <div>
      <img
        src={img4}
        alt="Nature image"
        className="w-full h-96 object-cover "
      />
      <div class="absolute inset-0 flex items-center justify-centermax-w-6xl mx-auto mb-80 sm:mb-48">
        <h1 class="text-black text-lg sm:text-3xl font-bold tracking-normal text-center">
          Be an advocate for all things green with our zero waste journal
          that'll help you integrate organic, eco-friendly and sustainable
          alternatives into your everyday life.
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between items-center p-5 mt-5">
          <h1 className="text-xl sm:text-3xl font-semibold">Blogs</h1>
          <select
            className="block w-1/2 sm:w-1/3 p-2 text-md font-semibold mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={selectedComponent}
            onChange={handleSelectChange}
          >
            <option value="">All Categories</option>
            <option value="cutl">Bamboo Cutlery</option>
            <option value="bp">Bamboo Products </option>
            <option value="coco">Coconut Bowl</option>
            <option value="candle">Coconut Shell Candles</option>
            <option value="eat">Healthy Eating</option>
            <option value="ns">Natural Soaps</option>
            <option value="rs">Reusable Straws</option>
            <option value="ss">Shaving Soaps</option>
            <option value="hg">How To Guide</option>
            <option value="sl">Sustainable Lifestyle</option>
            <option value="sk">Zero Waste Kitchen</option>
            <option value="wp">Zero Waste Products</option>
            <option value="wt">Zero Waste Tips</option>
          </select>
        </div>
        <div className="mt-4">
        {SelectedComponent ? <SelectedComponent /> : <AllActivities/>}
      </div>
      </div>
    </div>
  );
}
