import React, { useState, useEffect } from "react";
import CardAsset from "./CardAsset";
import jasmineFlowers from '../../src/assets/home/jasmine-flowers-vector.jpg';
import naturePic from '../../src/assets/home/nature.jpg';
import circleVector from '../../src/assets/home/circle-vector.png';

function SectionSecond() {

    const cardsData = [
        {
            image: jasmineFlowers,
            title: 'Custom Zero Waste Products',
            text: 'Highlight your commitment to the environment or surprise your loved ones with a personalized gift that stands the test of time. Reach out to us to design a custom product for your restaurant, shop, or event.',
            buttonText: 'Explore More',
        },
        {
            image: naturePic,
            title: 'Gift Nature Back',
            text: 'Seed Paper Bookmarks : Product made from biodegradable paper embedded with wildflower seeds. Guests can plant the bookmarks to grow flowers, making the favor both useful and eco-friendly.',
            buttonText: 'Explore More',
        },
        {
            image: circleVector,
            title: 'Change Your Surrounding',
            text: 'Elevate your home environment with eco-friendly essentials designed to make a positive impact on your surroundings. Our curated collection features sustainable products that combine functionality with environmental responsibility. ',
            buttonText: 'Explore More',
        },
    ];

    return (
        <>
            <div className="saction-template w-full ">
                <div className="section-title-template bg-wheat w-full h-full flex items-center justify-center pt-2 pb-2">
                    <div className="w-[70%] text-center raleway-text">
                        We inspire people to appreciate the beauty and purpose of
                        nature through our collection of eco-friendly products. Each item in
                        our showcase embodies our commitment to sustainability and the natural
                        world. Explore our selection and discover the elegance and functionality
                        of earth-friendly goods.
                    </div>
                </div>
            </div>

            
            <div className="section-second flex items-center justify-center ">
                <div className="card-stack flex justify-center">
                    {cardsData.map((card, index) => (
                        <CardAsset
                            key={index}
                            image={card.image}
                            title={card.title}
                            text={card.text}
                            buttonText={card.buttonText}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SectionSecond;