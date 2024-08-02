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
    src: "/src/assets/homeware/homeware1.webp",
    category: "homeware",
    name: "Eco-friendly Coconut Bowls & Spoons",
    description: (
      <React.Fragment>
        <p>Eco-friendly coconut bowls and spoons by Nature&apos;s nook are hand made by skilled artisans in Southern Vietnam. Our sustainable buddha bowls currently come in five unique eco styles. Each coconut bowl and spoon set is organic and natural, so size and shape may vary slightly from our pictures, but we think this adds to their charm!</p>
        <br />
        <p>Your coconut shell bowls and spoons are perfect for making vegan smoothie bowls, breakfast bowls, acai and ramen bowls and more.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>2 x Eco-friendly Coconut Bowls</li>
          <li>2 x Reclaimed Wooden Spoons</li>
          <li>1 x Jungle Straw (Bamboo Straw)</li>
          <li>1 x Coconut Fibre Straw Cleaning Brush</li>
          <li>1 x Natural Jute Straw Sleeve</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware2.webp",
    category: "homeware",
    name: "Dark Wood Cutlery Set",
    description: (
      <React.Fragment>
        <p>Our premium dark wood reusable eco cutlery set is handmade in Southern Vietnam alongside our coconut bowls. Each plastic-free cutlery set is crafted using scraps from a local furniture maker and housed in an organic cotton bag, hand sewn by seamstresses in historic Hoi An, Vietnam.</p>
        <br />
        <p>Wooden utensils are the best eco-friendly alternative to plastic cutlery and you can use your set for camping, takeaways, travel or as a handy lunch set</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Curved wooden fork</li>
          <li>1 x Serrated wooden knife</li>
          <li>1 x Natural bamboo straw</li>
          <li>1 x Coconut fibre straw cleaning brush</li>
          <li>1 x Organic cotton pouch</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware3.webp",
    category: "homeware",
    name: "Natural Bamboo Drinking Cups",
    description: (
      <React.Fragment>
        <p>Our handmade bamboo drinking cups are cut using a single piece of organic bamboo and polished to create the perfect vessel for your morning smoothie or tropical cocktail!</p>
        <br />
        <p>Pair our wooden cups with a set of zero waste bamboo drinking straws and bring the beach aura to your home!</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Bamboo drinking cup (18cm Height - 500ml capacity)</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware4.webp",
    category: "homeware",
    name: "Coconut Shell Tea Light Holder Set | Eco-Friendly, Unique & Unusual Tea Light Base",
    description: (
      <React.Fragment>
        <p>Coconut shell tea light holders by Nature&apos;s nook are handmade in rural Vietnam by talented artisan craftspeople. We use 100% eco-friendly, natural and organic coconuts to create our range of unique tea light holders, making them ideal for relaxing at home, weddings or events.</p>
        <br />
        <p>The majority of coconuts in Vietnam are harvested for their milks and oils, after which the coconut shells are either discarded or burned. Our zero waste tealight holders help prevent excess coconut shells from being burned and they provide a much needed secondary income for local farmers and craftspeople.</p>
        <br />
        <p>Our eco-friendly unusual tea light holders make the perfect unusual or quirky gift item for a friend who may be missing the beach! Use multiple tea lights to create a symmetrical lantern effect.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>2 x Natural coconut tea light holders</li>
          <li>1 x Printed kraft paper gift box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware5.webp",
    category: "homeware",
    name: "Bamboo Hairbrush | Sustainable Wooden Hair Brushes",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s bamboo hairbrush is designed using eco-friendly bamboo to suit all hair types. Whether your hair is curly, thick, straight or fine, this sustainable hairbrush will work for you. Our pressured paddle surface and soft bristles allow you to brush your hair wet or dry without causing irritation!</p>
        <br />
        <p>We use ethically sourced bamboo to produce our natural and organic hairbrush handles and package our bamboo hair brushes in a recycled zero waste kraft paper box.</p>
        <br />
        <p>The soft bristles on our eco paddle hair brushes are designed to massage your scalp and head, stimulating blood flow and promoting hair growth, whilst our wooden hairbrush handles are delicately shaped to give the user an ergonomic brushing experience.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Bamboo Hair Brush</li>
          <li>1 x Plastic-free Kraft paper presentation box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware14.webp",
    category: "homeware",
    name: "Bamboo Cotton Buds | Eco Cotton Swabs",
    description: (
      <React.Fragment>
        <p>Produced using eco-friendly bamboo and organic cotton, Nature&apos;s nook bamboo cotton buds are the best eco alternative to plastic q tips. We use a strong, thick and durable species of bamboo to ensure that our bamboo ear cleaning buds are difficult to break and supportive when you’re cleaning your ears.We use ethically sourced bamboo to produce our natural and organic hairbrush handles and package our bamboo hair brushes in a recycled zero waste kraft paper box.</p>
        <br />
        <p>Our bamboo cotton swabs come packaged in a rounded zero waste kraft paper box. Simply remove the lid and leave your eco cotton swabs in the bathroom, ready for use at any time!</p>
        <br />
        <p>Bamboo earbuds can also be used to remove eye makeup in hard to reach areas. Cotton swabs have an absorbent surface, perfect for removing makeup from the corner of your eyes.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>200 x Bamboo cotton buds</li>
          <li>1 x Round kraft paper box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware6.jpg",
    category: "homeware",
    name: "Replacement Heads for Long Handle Dish Brush",
    description: (
      <React.Fragment>
        <p>Our replacement dish brush heads are designed to fit Nature&apos;s nook&apos;s long handled bamboo dish brush, but may fit similar dish brushes from other brands. If you’re not sure whether our replacement dish brush heads will fit your dish brush, send us a message and our friendly customer service team will let you know.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>4 x Replacement dish brush heads</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware7.jpg",
    category: "homeware",
    name: "Kitchen Dish Cloths • All-Purpose Natural Cleaning Cloth",
    description: (
      <React.Fragment>
        <p>Our multi-functional kitchen & bathroom cleaning cloths are the perfect natural alternative to conventional plastic sponges. Each kitchen cloth is two-sided, with one side made from 100% soft organic cotton (perfect for gentle cleaning tasks) and the other side made from hard-wearing natural sisal fibres (great for tackling tough household cleaning jobs).</p>
        <br />
        <p>All of our eco-friendly washing up cloths are fitted with a small storage pouch. Simply slide in a solid dish soap bar and watch it lather up as you clean. When your chores are finished, simply wring our dishcloths dry and use the hang loop to store them on a hook or cupboard door.</p>
        <br />
        <p>Not only are our kitchen cleaning cloths functional and sustainable, they’re also made from a thicker more durable material, making them highly absorbent and machine-washable time and time again.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1x Natural washing up cloth (multiple colour options available)</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware8.jpg",
    category: "homeware",
    name: "Bamboo Snack & Dip Bowls",
    description: (
      <React.Fragment>
        <p>Our bamboo snack and dip bowls are perfect for serving potato chips, mixed nuts and other accompaniments at parties! Handmade using spun bamboo and painted with a terrazzo pattern, our rustic wooden snack bowls slot into almost any home decor setting!</p>
        <br />
        <p>All of our bamboo bowl sets are made using natural and organic Vietnamese bamboo, famed for its light tone and speedy growth, meaning that our products do not contribute to deforestation.</p>
        <br />
        <p>Add our lightweight bamboo dipping bowls to your collection and serve your friends and family using all natural tableware!</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>2 x Bamboo snack & dip bowls</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware9.webp",
    category: "homeware",
    name: "Water Bottle Brush",
    description: (
      <React.Fragment>
        <p>Nature&apos;s nook&apos;s reusable water bottle cleaning brushes are made using sustainable, ethically sourced bamboo and natural, durable sisal fibres. The long handle and textured grip ensures that our bottle brushes can reach every corner of your water bottle’s interior.</p>
        <br />
        <p>Our zero waste reusable bottle brushes are packaged using eco-friendly recycled kraft paper and the entire product is 100% plastic-free, ensuring that nothing you order from Nature&apos;s nook leaves a wasteful footprint.</p>        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Long handle bottle cleaner</li>
          <li>1 x Recycled kraft paper box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware10.webp",
    category: "homeware",
    name: "Bamboo Salad Server Set | Salad Tongs (Spoon & Fork)",
    description: (
      <React.Fragment>
        <p>Our terrazzo handle bamboo salad servers are hand crafted using a single piece of organic bamboo! Pair our bamboo salad tongs with a bamboo salad bowl or another wooden mixing bowl to create a rustic and minimal serveware collection.</p>
        <br />
        <p>All of our bamboo serveware is handmade using only basic tools, skilled hands and a good helping of organic Vietnamese bamboo. Sustainably sourced and ethically made!</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Bamboo serving fork</li>
          <li>1 x Bamboo serving spoon</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware11.jpg",
    category: "homeware",
    name: "Long Handle Bamboo Dish Brush",
    description: (
      <React.Fragment>
        <p>Our long handle bamboo dish brush is the perfect all-round washing up brush for daily use. Its long, ergonomic handle is comfortable to hold and features a small metal loop, allowing you to hang your dish brush from a hook or cupboard door.</p>
        <br />
        <p>The brush head has a bamboo base and soft sisal fibre bristles which are ideal for scrubbing crockery, glassware and ceramics. Our brush heads are fully replaceable and last an average of 3-6 months depending on use.</p>
        <br />
        <p>For tougher cleaning jobs, we recommend using our firm bristle replacement heads which can be purchased here.</p>
        <br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Long handle bamboo dish brush (brush head equipped)</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware12.webp",
    category: "homeware",
    name: "Coconut Shell Candle - Toasted Coconut Scent",
    description: (
      <React.Fragment>
        Our toasted coconut scented candle is divinely decadent, subtle and creamy, providing a relaxing and soothing aroma that fills the room with tranquillity and will make you reminisce about your last trip to the beach!        <br /> <br />
        All of our eco coconut candles are vegan-friendly, ethically sourced and hand poured using organic soy wax infused with essential oils. Every ingredient is planet friendly and sustainable.        <br /><br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>1 x Coconut scented candle (45-50hr burn time)</li>
          <li>1 x Organic cotton gift bag</li>
          <li>1 x Printed kraft paper box</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    src: "/src/assets/homeware/homeware13.webp",
    category: "homeware",
    name: "Coconut Cups | Natural Coco Shell Cup",
    description: (
      <React.Fragment>
        Coconut bowl cups by &apos;s are handcrafted by talented artisans in rural Vietnam. Our coconut cups sets are 100% organic and natural, handmade using real coconut shells! Each sustainable cup comes complete with a matching bamboo drinking straw, the perfect sustainable set for smoothie or juice lovers!        <br /> <br />
        Traditionally, after coconuts are harvested for their milks and oils, the shells are discarded and burned as waste. Repurposing the shells as coconut tumblers allows us to prevent them from being burned and also provides a much-needed secondary income for farmers and craftspeople in rural Vietnam.        <br /><br />
        <h3 className="text-lg font-medium">Set Contains:</h3>
        <ul>
          <li>2 x Eco-friendly coconut cups</li>
          <li>2 x Bamboo drinking straws</li>
          <li>1 x Coconut fibre straw cleaning brush</li>
        </ul>
        <br />
        <h3 className="text-lg font-medium">Dimensions:</h3>
        <ul>
          <li>
            10cm x 9cm (400ml)
          </li>
        </ul>
      </React.Fragment>
    ),
  },
];

const Homeware = ({ onBack, onNext }) => {
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
          <h2 className="text-3xl text-gray-700 font-semibold underline underline-offset-8">Sustainable Homeware</h2>
          <div>
            <Button
              variant="outlined"
              onClick={onBack}
              sx={{
                marginRight: 2,
                '&:hover': {
                  backgroundColor: '#036570',
                  color: '#fff',
                  borderColor: '#036570',
                },
              }}
            >
              Back to Categories
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
          Nature&apos;s nook&apos;s range of sustainable homeware products are handmade by artisan craftspeople in Vietnam. Add texture and flair to your home and kitchen with a responsibly sourced wooden bowl set, some coconut shell candles or maybe a bamboo cup for smoothies! <br /> <br /> Our zero waste homeware products are all packaged 100% plastic free using eco-friendly upcycled kraft paper boxes and recycled tissue paper.
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
        <h1 className="text-3xl text-gray-700 font-medium">Eco-Friendly Homeware Products</h1>
        <br />
        <div className="text-xl text-gray-600">
          <p>Nature&apos;s nook&apos;s sustainable homewares are handmade using eco-friendly bamboo and upcycled and reclaimed coconut shells. Our zero waste home decor range is designed to blend seamlessly into any living space, enhancing your aesthetic and creating a stunningly subtle eco ambience.</p>
          <br />
          <p>We produce the very best natural homeware for eco homes and our environmentally friendly home decor products can be found online via our website or in stores across the UK, EU and US! The vast majority of our zero waste household essentials are made using chemical-free, organic wood and other eco-friendly natural materials.</p>
          <br />
          <p>Our eco home decor products and eco-friendly home essentials are a great way to reduce plastic waste and carbon footprint and they make for some amazing eco-friendly gifts for those loved ones in your life.</p>
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

export default Homeware;
