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
    src: "/src/assets/soaps/bodybar-soap.webp",
    category: "soaps",
    name: "Coconut Husk Natural Body Bar Soap",
    description: (
      <React.Fragment>
        <p>Turn your bathroom into a tropical paradise with our signature coconut husk body soap bar! This luxurious cold-pressed soap bar is formulated to rehydrate and moisturise your skin using a gentle coconut oil base, combined with textured coconut husk chunks.
        </p>
        <br />
        <p>Coconut essential oils are known to help calm skin and alleviate symptoms of skin irritation such as redness and acne. On top of that, our coconut body bar smells so good, you might want to eat it!</p>
        <br />
        <p><b>Perfect for:</b> Moisturising and hydrating tired skin, eczema and acne treatment, reducing redness and improving complexion</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/soaps/charcoal-soap.webp",
    category: "soaps",
    name: "Activated Charcoal & Cracked Black Pepper Exfoliant Soap Bar",
    description: (
      <React.Fragment>
        <p>Cleanse and detoxify your skin with our delicate cracked black pepper and activated charcoal cleansing bar. Cold-pressed in Vietnam using all natural ingredients, this delicately balanced soap bar combines the purifying properties found in activated charcoal with the natural exfoliating effects of black pepper.</p>
        <br />
        <p>Activated charcoal is thought to lift bacteria and deep impurities from your pores, helping to reduce acne and improve overall skin complexion. Black pepper exfoliates dead skin and stimulates blood circulation, driving more oxygen to your face and leaving you with a healthy, glowing complexion.</p>
        <br />
        <p>This all-round cleansing and exfoliating bar is suitable for all skin types, but is especially good at tackling the symptoms of oily skin.</p>
        <br />
        <p><b>Perfect for:</b>Treating acne and blackheads, removing impurities, cleansing, exfoliating, resetting skin health</p>
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
    src: "/src/assets/soaps/coffee-soap.webp",
    category: "soaps",
    name: "Coffee Scrub Natural Exfoliant Soap Bar",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s natural coffee scrub body bars are filled with deeply aromatic grounded organic coffee beans. Coffee is an important and bountiful source of antioxidants, which is why it’s so effective at brightening, toning and improving the overall health and appearance of your skin.</p>
        <br />
        <p>Formulated to gently smooth away dehydrated and dead skin cells, our coffee scrub bars will awaken your skin and your mood, leaving you glowing inside and out.</p>
        <br />
        <p><b>Perfect for:</b>Exfoliating and repairing skin, natural acne treatment, improving complexion, boosting circulation and blood flow</p>
        <br />
        <h3 className="text-lg font-medium">Size: 100g</h3>
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
    src: "/src/assets/soaps/travel-soap.webp",
    category: "soaps",
    name: "Travel Soap Tin | Metal Soap Container",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s metal travel soap case is designed to keep your soaps, shampoo bars or shaving soaps clean and dry when you’re on the move! Our rectangular soap tins are 100% plastic-free and designed to last a lifetime. They also stack nicely on top of each other, so you can pack multiple metal soap containers without taking up a lot of space!</p>
        <br />
        <p>Our travel soap holders are made from smooth tin metal and are incredibly easy to wipe clean after use, perfect for taking to the gym, going camping or backpacking!</p>
        <br />
        <p>Our 3 part soap containers feature a drip tray which prevents your soaps pooling in water at the bottom of your soap case. To clean, simply remove the drip tray and rinse under warm water.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Travel soap case with drip tray (H 4cm x W 7cm x L 9.8cm)</li>
        </ul>
      </React.Fragment>
    ),
  },
];

const Soaps = ({ onBack, onNext, onPrevious }) => {
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
          <h2 className="text-3xl text-gray-700 font-semibold underline underline-offset-8">Natural Soaps</h2>
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
          Nature&apos;s nook&apos;s range of natural soaps are handmade in Vietnam by artisan soap makers. Our entire range of cold-pressed soaps are vegan friendly, cruelty-free, palm oil free and plastic-free. Switching to a plastic-free body soap is an important, but easy step in creating a zero waste bathroom!
          <br /> <br />
          Our eco-friendly solid soap bars are rich in organic essential oils and have a low water content, meaning that they last much longer than traditional soap bars. All of our natural body soaps and exfoliating soaps are made unisex, for women and for men + because we only use pure and natural ingredients (no nasty chemicals), our soaps are perfect for sensitive skin! All soaps are packaged plastic-free and our ethical soap bars are made using slow, cold-pressed techniques!
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
        <h1 className="text-3xl text-gray-700 font-medium">Vegan Soap Bars</h1>
        <br />
        <div className="text-xl text-gray-700">
          <p>Nature&apos;s nook&apos;s range of natural soap bars are all made using 100% natural and organic ingredients, with the exception of sodium hydroxide (a key component in all body soap). Our range of eco-friendly and sustainable soaps have been certified micro-plastic free and contain absolutely no palm-oil. All of our vegan-friendly soap bars are ethically and sustainably sourced, made using a luxurious coconut oil base and scented using high-quality organic essential oils.</p>
          <br />
          <p>We have cultivated an environmentally-friendly supply chain to ensure that all of our sustainable soap bars have minimal impact on the environment and planet. Our zero waste body soaps make the perfect plastic-free gift idea for her or him!</p>
          <br />
          <p>Visit each individual soap page for more information on the characteristics and properties of our natural body soaps!</p>
          <br />
          <h1 className="text-2xl text-gray-700 font-medium">FAQs - Natural Soap Bars</h1>
          <br />
          <h1 className="text-xl text-gray-700 font-medium">Are your natural soap bars cruelty-free?</h1>
          <br />
          <p>Yes. All of our soap bars are cruelty-free and vegan, meaning that we do not test on animals or use animal-derived ingredients. We handcraft all our bars with the utmost care, using only sustainable and organic materials.</p>
          <br />
          <h1 className="text-xl text-gray-700 font-medium">How are natural soap bars different from regular soap bars?</h1>
          <br />
          <p>
            Natural soap bars are made with natural and organic ingredients, whereas regular soap bars often contain chemicals and synthetic additives. <br />
            You can rest assured that our natural soap bars are free from parabens, sulphates and harsh detergents that can be found in some commercial soaps, ensuring a gentle touch on your skin.
          </p>
          <br />
          <h1 className="text-xl text-gray-700 font-medium">How long does each bar last?</h1>
          <br />
          <p>The longevity of each soap bar depends on usage, but typically each soap bar will last 2-3 weeks.</p>
          <br />
          <h1 className="text-xl text-gray-700 font-medium">How should I store my soap bars to make them last longer?</h1>
          <br />
          <p>Here are some ways to maximise the longevity of your soap bars: <br /><br />
            <ul>
              <li>1. Store them in a cool, dry place.</li>
              <li>2. Keep them away from direct sunlight and excessive humidity.</li>
              <li>3. Use a soap dish with proper drainage to prevent them from getting soggy.</li>
            </ul>
          </p>
          <br />
          <h1 className="text-2xl text-gray-700 font-medium">Benefits of Our Natural Soap Bars</h1>
          <br />
          <h1 className="text-xl text-gray-700 font-medium">Gentle on your skin</h1>
          <br />
          <p>Handmade with love and organic ingredients, our natural soap bars are gentle enough for all skin types, even sensitive skin. Our bars cleanse smoothly without stripping away your skin&apos;s natural oils, leaving it soft and moisturised. Say goodbye to dryness and discomfort with every wash.<br />
            <br />
            <h1 className="text-xl text-gray-700 font-medium">Every purchase supports local farmers</h1>
            <br />
            <p>We produce our soap bars from locally sourced, sustainably farmed materials, harnessing the power of nature.<br />
              Handmade by small-scale producers and artisans, our bars support local farmers and communities in Southern Vietnam. As an ethical business, Nature&apos;s nook believes in empowering and supporting developing communities by collaborating to create environmentally friendly products. <br /> <br />
              By choosing our soap bars, you&apos;re not only choosing natural ingredients and longer-lasting products but also supporting sustainable practices that conserve water and energy in manufacturing and transportation. <br />
            </p>
            <br />
            <h1 className="text-xl text-gray-700 font-medium">Environmentally Friendly</h1>
            <br />
            <p>Our commitment to the environment starts with our packaging; we use recycled cardboard boxes and paper-stuffed envelopes for your orders. No ink wasted on labels, thanks to our laser printer. Even the protective packaging is kraft paper. <br /><br />
              Our packing tape? Made from paper!
            </p>
          </p>
        </div>
      </div>
      {
        lightboxOpen && (
          <Lightbox
            images={images}
            initialIndex={currentImageIndex}
            onClose={handleCloseLightbox}
          />
        )
      }
    </div >
  );
};

export default Soaps;
