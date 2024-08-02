/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Lightbox from "../Lightbox";

const images = [
  {
    src: "/src/assets/zerowaste/zerowaste1.webp",
    category: "zerowaste",
    name: "Reusable Safety Razors for Women & Men | Eco-Friendly Metal Razor",
    description: (
      <React.Fragment>
        <p>
          <p>Our reusable eco safety razors for women or men are precision engineered to provide a smooth and comfortable zero waste shaving experience. Each men&apos;s or women&apos;s safety razor has a textured grip and extra long chrome metal handle, perfectly balanced for shaving hard to reach areas.</p>
          <br />
          <p>Our DE eco friendly safety razors are accompanied by a natural white travel bag, made from a blend of soft organic cotton and ethically sourced jute. We house our plastic-free razors in a premium, magnetic gift box, colour matched to make the perfect sustainable gift. They really are the best safety razors for women and men!</p>
        </p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Coloured metal reusable razor for women or men</li>
          <li>1 x Sustainable Gift Box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste2.webp",
    category: "zerowaste",
    name: "Bamboo Safety Razor | Reusable Bamboo Razor",
    description: (
      <React.Fragment>
        <p>
          <p>Our double edged bamboo safety razors are precision engineered and perfectly weighted to provide a seamless zero waste shaving experience. Each reusable razor is equipped with a unique long handle bamboo grip for comfort, and a stainless steel safety guard to prevent cuts and irritation.</p>
          <br />
          <p>Our sustainable DE bamboo razor sets all come packaged plastic-free in a stunning, bespoke designed kraft paper gift box, accompanied by a user guide for beginners.</p>
          <br />
          <p>Our bamboo razors are completely unisex and make the perfect sustainable gift for women or men, but we understand that making a change can be daunting. So we have created a user guide for safety razor beginners.</p>
        </p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Reusable bamboo razor</li>
          <li>1 x Sustainable Gift Box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste3.webp",
    category: "zerowaste",
    name: "Rose Gold or Black Reusable Safety Razors | Natural Jute Travel Bag",
    description: (
      <React.Fragment>
        <p>
          <p>Our latest range of eco-friendly safety razors have been designed with first-time safety razor users in mind. Our ergonomic grip is textured to reduce slipping, perfectly weighted to increase comfort and balanced to provide an effortless shaving experience.</p>
          <br />
          <p>Our chrome plated zero waste DE razors are available in stunning rose gold or executive black. Keep your razors organised with our matching safety razor stands.</p>
        </p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Eco-friendly safety razor (Metallic Black or Rose Gold)</li>
          <li>1 x Optional metal stand</li>
          <li>1 x Sustainable Gift Box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/soaps/ginger-soap.webp",
    category: "soaps",
    name: "Ginger & Spice Natural Exfoliant Bar",
    description: (
      <React.Fragment>
        <p>Treat your skin with one of our uplifting ginger and spice body bars! Ginger has long been used in traditional medicine to treat aches and pains, improve circulation and relax tense muscles, whilst it’s high antioxidant levels help to improve skin health and reduce wrinkles and hypopigmented scars.</p>
        <br />
        <p>This warming and relaxing body bar has an underlying sweetness that stimulates the senses and leaves you feeling calm and at peace.</p>
        <br />
        <p><b>Perfect for:</b> Aches and pains, improving blood flow, alleviating the symptoms of cold and flu, hypopigmented scar reduction.</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/soaps/lime-soap.webp",
    category: "soaps",
    name: "Lime & Sea Salt Natural Soap Bar",
    description: (
      <React.Fragment>
        <p>Lime essential oils are fruity, crisp and dynamic, helping to enhance your mood and relieve symptoms of stress and anxiety. Lime also has antibacterial and antiviral properties which balance oily skin and fight infection.</p>
        <br />
        <p>The cleansing properties of lime will awaken your senses and leave you glowing, whilst the grains of sea salt will sweep away any dehydrated or dead skin cells.</p>
        <br />
        <p><b>Perfect for:</b>Stress / anxiety relief, balancing oily skin, refreshing and rehydrating, gentle exfoliation.</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/soaps/citrus-soap.webp",
    category: "soaps",
    name: "Citrus Natural Body Bar Soap",
    description: (
      <React.Fragment>
        <p>Our refreshing citrus body bar is cold-pressed using green tea and lemon essential oils, creating a delicate harmony of sweet and zesty aromas. Perfect for enhancing a nighttime bath or awakening your senses in the morning.</p>
        <br />
        <p>Green tea is rich in vitamin b-2 which helps maintain collagen levels, improving your skin’s firmness and combating signs of ageing. The gentle herby flavour provides a subtle backdrop for the lemon essential oils in this soap, which bursts through with aromatic citrusy notes!</p>
        <br />
        <p><b>Perfect for:</b>Improving complexion, feeling refreshed, combating signs of ageing, rehydrating your skin</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/soaps/shaving-soap.jpg",
    category: "soaps",
    name: "Shaving Soap Bars | Plastic-free Solid Natural Shaving Soaps",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s range of natural solid shaving soap bars are handmade by artisan soap makers in Vietnam. Our shaving cream bars combine locally-sourced, organic coconut oil with high-quality essential oils to create a luxurious shaving bar that is kind to your skin and kind to the planet.</p>
        <br />
        <p>Our traditional shaving soaps are cold pressed and long-lasting. Each vegan friendly shaving bar will last from 6-12 months, depending on how often you shave.</p>
        <br />
        <h2 className="font-bold">Aloe Vera & Cooling Mint Shave Bar</h2>
        <p>
          Our plastic-free solid shaving soap combines cooling mint extract with soothing aloe vera to create an uplifting and revitalising shaving experience for men and women.</p>
        <br />
        <h2 className="font-bold">Charcoal & Cracked Black Pepper Shaving Soap</h2>
        <p>
          Our charcoal and cracked black pepper shaving bar combines rich, moisturising charcoal with invigorating black pepper to cleanse and exfoliate your skin whilst shaving. The Infused zesty notes in this shaving soap are sure to put a spring in your step!</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste4.jpg",
    category: "zerowaste",
    name: "Wooden Soap Dish | Eco Bathroom Soap Dishes",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s wooden soap dishes are made from 100% sustainable and eco-friendly wood. Our bathroom soap dishes are carved with horizontal drainage holes, helping your soap to dry more quickly and prolonging it’s lifespan.</p>
        <br />
        <p>Our natural wooden soap storage holders can be used with any body soap bars, shaving bars or shampoo & conditioner bars. The grip underneath also ensures that you can place your wooden soap tray in the shower, bath or any surface without it slipping!</p>
        <br />
        <h3 className="text-lg font-medium">Set contains:</h3>
        <ul>
          <li>1 x Wooden soap dish (Zero waste and package-free)</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste5.jpg",
    category: "zerowaste",
    name: "Natural Loofah | Organic Exfoliating Sponge",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s 100% natural loofahs are the perfect organic scrubbing device for soaking in the shower, bath or cleaning around the house!</p>
        <br />
        <p>Natural loofahs are often thought to be sea creatures, but this common misconception is entirely untrue. Loofahs are actually part of the cucumber family! The loofah fruit grows on vines and when ripened, it’s removed and dried, where it transforms into an effective natural cleaning utensil!</p>
        <br />
        <p>Our organic loofahs can be used as a sponge in the shower or bath, or they can be used as a household cleaning tool to scrub your floor tiles, hardwood furniture and much more! You can even chop our loofahs up into smaller pieces and use them to clean pots and pans! They really are the most versatile natural cleaning tool available!</p>
        <br />
        <h3 className="text-lg font-medium">Set contains:</h3>
        <ul>
          <li>1 x Natural loofah</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste6.webp",
    category: "zerowaste",
    name: "Sisal Soap Bag | Mesh Soap Saver Pouch",
    description: (
      <React.Fragment>
        <p>Our sisal soap bags are made from 100% organic sisal grass fibres and woven into an exfoliating mesh blend. Soap saver bags help to extend the lifespan of your natural soaps! Simply hang your sisal soap pouch by it’s adjustable drawstring anywhere in your shower or bathroom and excess water will naturally drain away, allowing your soap to stay dry when not in use!</p>
        <br />
        <p>Nature&apos;s noop&apos;s soap saver bag has a coarse mesh surface which is perfect for scrubbing and exfoliating away dead skin cells, leaving your skin radiant and glowing!</p>
        <br />
        <p>Our soap bags also help keep your bathroom clean by acting as a soap holder bag and stopping your soap bar from leaving slimy imprints on your porcelain surfaces.</p>
        <br />
        <h3 className="text-lg font-medium">Set contains:</h3>
        <ul>
          <li>1 x Sisal soap bag</li>
        </ul>
      </React.Fragment>
    )
  },
  {
    src: "/src/assets/zerowaste/zerowaste7.jpg",
    category: "zerowaste",
    name: "Beard Comb | Wooden Beard Grooming Kit For Men",
    description: (
      <React.Fragment>
        <p>Style your beard and get the look that you desire with our 100% natural wooden beard comb! Our evenly spaced fine teeth prongs are suited to all beard types or facial hair style and can be used in combination with a beard brush to effectively clean and manage your beard.</p>
        <br />
        <p>Beard combs are an essential part of any beard care routine and using a pocket beard comb can help to guide unruly facial hair, pushing it in the right direction and preventing painful ingrown hairs.</p>
        <br />
        <p>As any proud bearded gentleman would know, beards are also playgrounds for food particles and dry skin. Grooming your beard and moustache with a beard comb not only helps to remove these unwanted visitors, it also helps to detangle your facial hair, creating a smooth, sleek and stylish beard.</p>
        <br />
        <p>Combining beard combing with moisturisers and beard oils also helps to evenly distribute them throughout your facial hair, giving every inch of your beard the attention it deserves!</p>
        <br />
        <h3 className="text-lg font-medium">Set contains:</h3>
        <ul>
          <li>1 x Organic wood beard comb</li>
          <li>1 x Vegan leather beard comb pouch (Military style travel pouch)</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/zerowaste/zerowaste8.jpg",
    category: "zerowaste",
    name: "Razor Blade Disposal Tin",
    description: (
      <React.Fragment>
        <p>Keep your bathroom neat and tidy with our safety razor blade disposal tin. Comfortably holding 100 razor blades, our compact razor blade bank can be stored on your bathroom windowsill, sink or bathtub.
        </p>
        <br />
        <p>When your razor blade storage bank is full, simply remove the bottom and pour the razor blades into the bin. Alternatively, tape up the top of your razor blade disposal container and throw it away.</p>
        <br />
        <p>All safety razor blades are coated in PTFE, making them non-recyclable at most local recycling centres. If you’d like to recycle your razor blades, please check our “care guide” tab for more information.</p>
        <br />
        <h3 className="text-lg font-medium">Set contains:</h3>
        <ul>
          <li>1 x Steel razor blade storage bank (wrapped in recycled kraft paper)</li>
        </ul>
      </React.Fragment>
    )
  },
];
const Zerowaste = ({ onNext, onPrevious }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(null);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="disc p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-gray-700 font-semibold underline underline-offset-8">Zero Waste Bathroom</h2>
          <div>
            <Button
              variant="outlined"
              onClick={onPrevious}
              sx={{
                marginRight: 2,
                '&:hover': {
                  backgroundColor: '#036570',
                  color: '#fff',
                  borderColor: '#036570',
                },
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={onNext}
              sx={{
                marginRight: 2,
                '&:hover': {
                  backgroundColor: '#036570',
                  color: '#fff',
                  borderColor: '#036570',
                },
              }}
            >
              Next
            </Button>
          </div>
        </div> <br />
        <p className="text-xl text-gray-600">
          Our range of zero waste bathroom essentials and sustainable swaps are designed to help your restroom become plastic-free. Not only are our eco-friendly bathroom products ethical, they’re luxurious too. Going waste-free doesn’t have to be a chore with Nature&apos;s nook!
          <br /> <br />
          We have designed a range of reusable razors, natural soaps, eco shaving bars along with other vegan, eco-friendly and organic toiletries. Be kind to your body, and your bathroom!
        </p>
      </div>
      <div className="products flex flex-wrap justify-evenly items-center m-8 p-8 pt-0">
        {images.map((image, index) => (
          <Card key={index} sx={{
            maxWidth: 250,
            margin: 2,
            transition: "box-shadow 0.3s, transform 0.3s",
            "&:hover": {
              boxShadow: 10,
              transform: "Scale(1.05)",
            },
          }} onClick={() => handleOpenLightbox(index)}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image.src}
                alt={image.name}
              />
              <CardContent sx={{ padding: 1, maxHeight: 50, overflow: "hidden" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: 22,
                    marginBottom: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {image.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ padding: 1 }}>
              <Button size="small" color="primary">
                See detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className="p-8">
        <h1 className="text-3xl text-gray-700 font-medium">Sustainable Bathroom Products</h1>
        <br />
        <div className="text-xl text-gray-600">
          <p>Natural bathroom products are an essential way to reduce waste in your home. Traditionally, bathrooms, toilets and restrooms are littered with plastics and microplastics that disguise themselves in shower gels, soaps, razors and more! If you’re aiming to switch to a zero waste lifestyle, make a few quick and easy changes to sustainable bathroom products. It’s the best place to start!</p>
          <br />
          <p>Nature&apos;s nook’s range of eco-friendly toiletries are all designed to help you kick plastic out of your home (and save money doing it). Our eco bathroom products last much longer than supermarket alternatives and in some cases are infinitely reusable! All of our cosmetic products are certified micro plastic-free, vegan, chemical-free and palm-oil free. With the exception of sodium hydroxide (a key soap component), our cosmetics are all made using 100% organic ingredients as well!</p>
          <br />
          <p>Many of our eco bathroom alternatives are made using environmentally friendly plastic substitutes such as bamboo or natural loofahs whilst the bases of our soaps are made with reclaimed coconut oil, sustainably sourced in Southern Vietnam.</p>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={images}
          initialIndex={currentImageIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};

export default Zerowaste;
