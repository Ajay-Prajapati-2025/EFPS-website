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
        src: "/src/assets/custom/custom1.webp",
        category: "custom",
        name: "Reusable Bamboo Drinking Straws | Bulk Pack For Businesses (Not customised)",
        description: (
            <React.Fragment>
                <p>Jungle Straws are individually hand crafted and harvested by local artisans at a small, family-run farm in rural Vietnam. Our reusable bamboo straws are an eco-friendly and sustainable solution to plastic, made without the need for any harmful pesticides or chemicals. Our entire process is safe, non-toxic and completely organic.</p>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/custom/custom2.jpg",
        category: "custom",
        name: "Custom Branded Bamboo Straws For Businesses or Weddings",
        description: (
            <React.Fragment>
                <p>Our reusable bamboo straws are handmade using sustainably sourced bamboo, grown in Northern Vietnam and engraved in the UK. Our custom bamboo straws are not only a simple and cost-effective solution to plastic straws, they are also infinitely reusable, vegan-friendly and 100% organic.</p>
                <br />
                <p>Customise bamboo straws for your business using our order form above. We have low minimums and are happy to supply branded bamboo straws for cafes, coffee shops, restaurants, bars, hotels and any other type of business.</p>
                <br />
                <p>Once you place an order with us, our friendly team will reach out within 1 working day to show you a prototype. You can either approve the design and we’ll get started on your full order, or you can change the design as many times as you’d like until we make a custom straw that perfectly represents your brand.</p>
                <br />
                <p>You can make branded bamboo straws with your logo, hashtag, social media handle or with any text that you’d like to include. We make personalised bamboo straws in a range of sizes to suit any drink types:</p>
                <br />
                <ul>
                    <li>Thin (4-6mm) - Perfect for cocktails</li>
                    <li>Medium (7-9mm) - The everyday straw</li>
                    <li>Thick (10-13mm) - Smoothies & Milkshakes</li>
                    <li>Boba tea straw (12mm+) - Pointed at one end and perfect for drinking bubble tea</li>
                </ul>
            </React.Fragment>
        ),
    },
    {
        src: "/src/assets/custom/custom3.webp",
        category: "custom",
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
        src: "/src/assets/custom/custom4.jpg",
        category: "soaps",
        name: "Bags For Reusable Straws",
        description: (
            <React.Fragment>
                <p>Our &quot;Jungle Pouches&quot; are hand sewn and made of natural jute. They are coloured using eco-friendly vegetable dye and they&apos;re the perfect width for two medium sized bamboo straws and a cleaning brush or one thick/boba tea bamboo straw.</p>
                <br />
                <p>We stock a range of 8 vibrant colours which can be paired with our straws to create keepsakes, sustainable giveaway items for your business or eco-friendly wedding favours.</p>
                <br />
            </React.Fragment>
        ),
    },
];
const Custom = ({ onBack, onPrevious }) => {
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
                    <h2 className="text-3xl text-gray-700 font-semibold underline underline-offset-8">Custom Reusable Straws</h2>
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
                    </div>
                </div> <br />
                <p className="text-xl text-gray-600">
                    <p>With no minimum orders and a 5 working day turnaround time, ordering custom reusable straws for your business has never been easier. Nature&apos;s nook’s friendly team of designers will work with you to create beautiful made to order laser engraved straws for your restaurant, cafe, coffee shop or bar. Simply order the amount of sustainable straws that you need, complete the design questionnaire and we’ll get back to you within 2 working days with a prototype. Once you approve your design, we’ll ship your new eco-friendly personalised straws within days.</p>
                    <br />
                    <p>Creating branded straws can offer a range of benefits to your business. Not only are our vegan straws more environmentally-friendly, but by engraving customised straws with your logo, website or social media handle you&apos;ll be encouraging your customers to share photos of their drinks with all of their followers and bring a larger audience to your business. We offer reusable straws in all sizes including custom cocktail straws & custom boba tea straws.</p>
                    <br />
                    <p>Personalised straws for your business take no longer than a week to make and deliver (globally), and last a lifetime. Check out our full range of custom straws and straw accessories below and if you have any questions, use our contact form here to get in touch.</p>
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
                <h1 className="text-2xl text-gray-700 font-medium">Customised Bamboo Straws</h1>
                <br />
                <p className="text-xl text-gray-600">Our high-quality custom branded bamboo drinking straws and straw accessories are engraved and shipped from the UK. Personalised straws aren’t just great for businesses, they can also be used for events, weddings, baby showers and birthday parties.</p>
                <br />
                <h1 className="text-2xl text-gray-700 font-medium">How Long do Our Engraved Drinking Straws Last?</h1>
                <br />
                <p className="text-xl text-gray-600">Our custom bamboo drinking straws are made to last a lifetime. Simply clean them using one of our straw cleaning brushes after each use and store in a cool, dry place to prolong their lifespan.
                </p>
                <br />
                <h1 className="text-2xl text-gray-700 font-medium">How Does the Design Process Work?</h1>
                <br />
                <p className="text-xl text-gray-600">
                    <p>Simply click through to the product page and choose the quantity of straws that you need. Once you’ve decided the amount of custom straws that you need, type in your desired text and font and we’ll do the rest.</p>
                    <br />
                    <p>If you’d like a logo engraved on your straws, upload it via the product page and our design team will make a prototype within 2 days for your approval. If you want to change the design, you can do so as many times as you’d like or you can cancel the order at any time without being charged.</p>
                    <br />
                    <p>Our job is to ensure that every single customer loves their personalised straws. If you’re not happy, then we’re not happy!</p>
                </p>
                <br />
                <h1 className="text-2xl text-gray-700 font-medium">What is Best Practice For Branded Straws?</h1>
                <br />
                <p className="text-xl text-gray-600">
                    <p>Personalised drinking straws look best when the design is short and bold. If you are buying custom straws for a business or branded straws for an event, then try using your website, a hashtag or simply the brand name.</p>
                    <br />
                    <p>If you’re ordering personalised wedding straws or custom straws as wedding favours then the bride & grooms’ names, separated by a heart or another simple line art design looks great. You can also include the date on each straw as a keepsake.</p>
                </p>
                <br />
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

export default Custom;
