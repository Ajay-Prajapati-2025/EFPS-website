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
        src: "/src/assets/onthego/onthego1.jpg",
        category: "onthego",
        name: "Bamboo Cutlery Set (Green bag)",
        description: (
            <React.Fragment>
                <p>
                    <p>Bamboo cutlery sets by Nature&apos;s nook are ethically sourced and handmade in Vietnam by skilled local artisans at our crafts workshop. Each portable set of eco friendly utensils comes complete with a serrated bamboo knife, sturdy bamboo fork, and a bamboo tablespoon as well as a bamboo straw and coconut fibre straw cleaning brush.</p>
                    <br />
                    <p>Our entire zero waste flatware set is organic and natural and comes packaged in a natural jute presentation bag. Perfect as a sustainable gift.</p>
                    <br />
                    <p>Nature&apos;s nook bamboo utensil sets are lightweight and fold to easily fit in your purse, handbag or jacket pocket. Ideal as a plastic-free alternative for eating on-the-go, lunch, picnics and takeaways.</p>
                </p>
                <br />
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego2.webp",
        category: "onthego",
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
        src: "/src/assets/onthego/onthego3.jpg",
        category: "onthego",
        name: "Reusable Stainless Steel Water Bottle (Matt Effect White)",
        description: (
            <React.Fragment>
                <p>
                    <p>Nature&apos;s nook’s uniquely designed range of two-tone metal reusable water bottles are vacuum insulated and double-walled to keep liquids cold for 24 hours or hot for 12 hours!</p>
                    <br />
                    <p>We use professional grade 304 stainless steel to ensure that your eco flasks last a lifetime, remain rust-resistant and stay leak-proof! We’re so confident in our bottle’s quality that we offer a <b>lifetime guarantee</b> on all of our reusable stainless steel water bottles!</p>
                    <br />
                    <p>Our commercial kitchen quality materials do not retain any flavour from drinks and our matt paint coating eliminates condensation, ensuring that you can grip your water bottle comfortably and effortlessly!</p>
                    <br />
                    <p>All of our plastic-free metal water bottles are made with an airtight lid, no spills, no leaks!</p>
                </p>
                <br />
                <h3 className="text-lg font-medium">Set Contains:</h3>
                <ul>
                    <li>1 x Reusable stainless steel water bottle - White / Grey (650ml / 22oz)</li>
                </ul>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego4.jpg",
        category: "soaps",
        name: "Reusable Bamboo Drinking Straws | Natural Jute Bag (Pack of 6)",
        description: (
            <React.Fragment>
                <p>Jungle Straws are individually hand crafted and harvested by local artisans at a small, family-run farm in rural Vietnam. Our reusable bamboo straws are an eco-friendly and sustainable solution to plastic, made without the need for any harmful pesticides or chemicals. Our entire process is safe, non-toxic and completely organic.</p>
                <br />
                <p>Our &quot;Jungle Pouches&quot; are hand sewn and made of natural jute. They are coloured using eco-friendly vegetable dye and they&apos;re the perfect width for two straws and a cleaning brush.</p>
                <br />
                <p>This set includes 6 hand-crafted bamboo straws, 1 cleaning brush and 1 Jungle Pouch.</p>
                <br />
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego5.jpg",
        category: "soaps",
        name: "Stainless Steel Reusable Straw Set | Ocean Inspired (Pack of 8)",
        description: (
            <React.Fragment>
                <p>Jungle Straws Deep Ocean Edition metal straw set is inspired by the colours of the sea and the waves. Our Deep Ocean Straws are completely unique, the colour palette and dip dye effect was designed by our in-house team to replicate the mood of the sea and remind people of the benefits of using sustainable straws! The perfect eco-friendly gift!</p>
                <br />
                <h3 className="text-lg font-medium">Set contains:</h3>
                <ul>
                    <li>4 x Straight stainless steel straws</li>
                    <li>4 x Bent stainless steel straws</li>
                    <li>1 x Straw cleaning brush</li>
                    <li>1 x Natural jute pouch</li>
                </ul>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego6.webp",
        category: "soaps",
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
        src: "/src/assets/onthego/onthego7.webp",
        category: "soaps",
        name: "Reusable Straw Cleaning Brushes for Bamboo or Stainless Steel Straws",
        description: (
            <React.Fragment>
                <p>Jungle Straws all include a straw cleaning brush. However, if you need an extra one then we you can buy them right here. We have two cleaning brushes to choose from.</p>
                <br />
                <ul>
                    <li><b>Nylon bristles:</b> Standard metal cleaning brush with nylon bristles</li>
                    <li><b>Coconut fibre bristles:</b> Eco friendly cleaning brush made from coconut fibres</li>
                    <li><b>Grass fibre bristles:</b> Natural pipe cleaner made from a type of grass, grown in Asia.</li>
                </ul>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego8.webp",
        category: "onthego",
        name: "Reusable Bamboo Drinking Straws | Bulk Pack For Businesses (Not customised)",
        description: (
            <React.Fragment>
                <p>Jungle Straws are individually hand crafted and harvested by local artisans at a small, family-run farm in rural Vietnam. Our reusable bamboo straws are an eco-friendly and sustainable solution to plastic, made without the need for any harmful pesticides or chemicals. Our entire process is safe, non-toxic and completely organic.</p>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/onthego/onthego9.webp",
        category: "onthego",
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
        src: "/src/assets/onthego/onthego10.webp",
        category: "onthego",
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
];
const Onthego = ({ onBack, onNext, onPrevious }) => {
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
                    <h2 className="text-3xl text-gray-700 font-semibold underline underline-offset-8">On-The-Go</h2>
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
                    <p>Our zero waste on-the-go collection is designed to help you stay plastic-free when travelling or outside of your home. All of our sustainable travel products are reusable, eco-friendly and designed in-house by the Nature&apos;s nook team!</p>
                    <br />
                    <p>Polluting the environment when you’re on the move is the worst! Make some sustainable swaps today and start travelling waste-free!</p>
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
                <h1 className="text-3xl text-gray-700 font-medium">Eco Travel Products</h1>
                <br />
                <div className="text-xl text-gray-600">
                    <p>Zero waste travel products ensure that whether you’re camping, backpacking or travelling abroad, your trip is guilt-free (and plastic-free)! We have created a range of sustainable, eco-friendly on the go products that not only replace single-use plastic, but often help small communities in Vietnam thrive! Many of our zero waste on-the-go products are handmade in rural Vietnam. Whether it’s our signature Jungle Straws or our travel cutlery sets, all of our products are made with purpose!</p>
                    <br />
                    <p>Our travel-friendly range of ethical and reusable plastic alternatives can be used whilst at work, on planes, with street food or at camp! Everything we sell is vegan-friendly too, so all of our on-the-go vegan products make the perfect plant-based gifts!</p>
                    <br />
                    <p>If you’re out and about, start using environmentally friendly products instead of creating more waste. Nature&apos;s nook produces the best eco on-the-go products and they are all available on our online store.</p>
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

export default Onthego;
