import React, { useState, useEffect } from "react";
import wooden_product from "../../src/assets/home/wooden_product.webp";
import image_tree from "../../src/assets/home/tree1.webp";
import template_leaf from "../../src/assets/home/template_leaf.webp";
import branch_icon from "../../src/assets/home/olive-branches-award-symbol.png";
import leaves from "../../src/assets/home/two-leaves.png";

function SectionThird() {
  return (
    <div className="section-third pr-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="font-size-17 mt-20 ml-10 mb-20">
            At the heart of our eco-friendly product showcase lies a commitment
            to sustainability and environmental responsibility. We have
            carefully curated a diverse collection of products that not only
            meet the highest standards of quality and performance but also
            champion the principles of eco-consciousness
          </p>
          <img src={wooden_product} alt="Image" className="wooden-image " />
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="font-custom-weight mt-20 ml-10">
            Eco-Friendly <br></br>Essentials
          </p>
          <p className=" mt-2 raleway-font font-size-17 ml-10">
            Explore our carefully curated selection of eco-friendly products
            designed to enhance your daily life while minimizing your
            environmental impact. From sustainable home goods to natural
            personal care items
          </p>

          <div className="flex mt-40 ml-10">
            <div className="w-3/10 mr-3">
              <img
                src={image_tree}
                alt="tree image"
                className="object-cover image-tree-section3"
              />
            </div>
            {/* Right Column - Text */}
            <div className="w-7/10">
              {" "}
              {/* 70% width */}
              <p className="font-custom-weight mb-3">
                Organic<br></br>Earth
              </p>
              <p className="mr-2 font-size-17">
                Using eco-friendly products can significantly benefit organic
                soil, fostering a healthier and more sustainable ecosystem.
                Unlike conventional chemicals and pesticides, which can deplete
                soil nutrients and disrupt microbial life, eco-friendly products
                are designed to work in harmony with nature. These products
                often use natural ingredients and processes that enhance soil
                fertility without introducing harmful toxins.
              </p>
            </div>
          </div>

          <div className="flex mt-20 mb-4 space-x-4 overflow-x-auto items-center justify-center">
            <img src={leaves} alt="" className="h-[20px]" />
            <img src={branch_icon} alt="" className="h-[30px]" />
            <span className="template-leaf-img">
              <img src={template_leaf} alt="" style={{ borderRadius: 10 }} />
            </span>
            <img src={branch_icon} alt="" className="h-[30px]" />
            <img src={leaves} alt="" className="h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThird;
