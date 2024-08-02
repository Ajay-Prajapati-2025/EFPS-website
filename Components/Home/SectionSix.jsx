import React, { useState, useEffect } from "react";
import reuseImg from '../../src/assets/home/reuse-img.jpg';
import reduseImg from '../../src/assets/home/reduce-img.jpg';
import recycleImg from '../../src/assets/home/recycle-image.jpeg';
import bagImg from '../../src/assets/home/bag-img.png';

const sections = [
    {
        image: reuseImg,
        content: 'Reuse',
        content2: "Sustainable development focuses on reusing resources efficiently to meet present needs without compromising future generations.",
    },
    {
        image: reduseImg,
        content: 'Reduce',
        content2: "Aims to reduce resource consumption and waste to ensure long-term environmental health and equity.",
    },
    {
        image: recycleImg,
        content: 'Recycle',
        content2: "Emphasizes recycling materials to minimize waste and conserve resources for future use.",
    },
    {
        image: bagImg,
        content: 'Take Initiative',
        content2: " Individuals and organizations to take initiative in adopting practices that support environmental stewardship and social responsibility.",
    },
];

function SectionSix() {
        const [index, setIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % sections.length);
            }, 3000);

            return () => clearInterval(interval);
        }, []);


    return (

        <>
            <div className="section-Six">
                <div className="flex w-full">
                    {/* Left Side */}
                    <div className="w-1/2 p-8 flex items-center justify-center bg-gray-100">
                        <div>
                            <p className="font-custom-header mb-4">{sections[index].content}</p>
                            <p className="">{sections[index].content2}</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 relative">
                        <img
                            src={sections[index].image}
                            alt={`Section ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </>
    );
}

export default SectionSix;