import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import img1 from '../../src/assets/about/image1.webp';
import img2 from '../../src/assets/about/image2.webp';
import img3 from '../../src/assets/about/image3.webp';

export default function About() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 2000, offset: 100, once: false }); 
    }, []);
    return (
        <div className="w-full">
            <div className="flex">
                <div className='lg:w-1/2 w-full m-8 sm:px-16 px-8 sm:py-8 py-4 flex flex-col justify-center' data-aos="fade-up">
                    <h1 className='sm:text-2xl text-xl font-medium'>Unique Products. Unique Stories.</h1>
                    <br />
                    <h1 className="md:text-5xl lg:text-6xl text-4xl text-[#036570] font-semibold">The Nature&apos;s nook Story</h1>
                    <br />
                    <h1 className="sm:text-2xl text-xl font-medium">Discover how we built our brand & meet the people that make it possible. We proudly make products with purpose.
                    </h1>
                </div>
            </div>
            <div className="mb-12 p-4 md:text-xl text-lg text-center text-white bg-[#036570]" data-aos="fade-up">
                <p className="lg:w-3/4 lg:mx-auto">
                    &quot;Nature&apos;s nook is all about human culture. From the farmers and artisans we work with in rural Vietnam, to the restaurants, independent brands, shops and customers we serve. We put as much care into forging a unity with our loyal tribe of partners as we do creating our zero waste and sustainable products.&quot;
                </p>
            </div>
            <div>
                <h1 className="md:text-4xl text-3xl text-[#036570] text-center font-medium">A Single Straw</h1>
                <br />
                <div className="md:w-4/5 w-11/12 mx-auto md:text-xl text-lg md:flex lg:flex-row flex-col gap-x-4 text-gray-600">
                    <div className="flex-1 p-4 bg-white" data-aos="fade-up">
                        <p>
                            Nature&apos;s nook was conceived to remedy the damage a single straw can do to our environment. Currently, <b className='text-black'>500 million plastic straws</b> are discarded each year. Each of those straws can take 200 years to break down, and will still exist as micro particle plastics.
                            <br /><br />Before Nature&apos;s nook came Jungle Straws, which was launched in August 2018 with ethically sourced, reusable drinking straws made from the lungs of the East, bamboo. Every straw is handmade in Northern Vietnam at a family-ran bamboo farm. Now they are the #1 best-selling bamboo straw product on Amazon and Jungle Straws have partnered with the likes of National Geographic, BBC Earth and TOMS.
                            <br /><br />Our journey has since taken us from Northern Vietnam to the coconut kingdom of Southern
                        </p>
                    </div>
                    <div className="flex-1 p-4 bg-white" data-aos="fade-up">
                        <p>
                            Vietnam, with a couple of detours along the way. As world travellers with a love for life, we were transfixed with saving the natural environment as well as connecting with cultures of far-flung communities. And so, Nature&apos;s nook was hatched!
                            <br /><br />Now, under the Nature&apos;s nook canopy, we produce organic coconut bowls, bamboo cutlery, safety razors, shaving soaps, wooden cups and more. All are made from sustainable materials and innovatively crafted with leading British designers and Asian artisans.
                            <br /><br />As a nomadic business, we straddle East and West. Our Headquarters is in Britain, but we continue to make regular visits to our partner farms, factories and craft workshops in Asia. This way we are able to guarantee fair treatment of
                        </p>
                    </div>
                    <div className="flex-1 p-4 bg-white" data-aos="fade-up">
                        <p>
                            workers, high-quality production standards and 100% organic manufacturing. Nothing is imported, nothing puts a strain on the planet, and every sale benefits local communities.
                            <br /><br /> Culture is all about human culture. From the farmers and artisans we work with in rural Vietnam, to the restaurants, independent brands, shops and customers we serve. We put as much care into forging a unity with our tribe of partners as we do creating our products.
                            <br /><br />We are still explorers at heart, and the journey of Nature&apos;s nook is as organic as our products. Just like bamboo shoots, our beliefs continue to grow and lead us to harvest new ideas. The thing about adopting a sustainable life is that <b className='text-black'>it&apos;s never too late to begin</b>, so why not start your own journey with us today with that single straw.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="md:text-4xl text-3xl text-[#036570] font-semibold text-center md:m-12 m-8">What We Do..?</h1>
            <div className="lg:w-4/5 w-11/12 mx-auto lg:flex"  data-aos="fade-up">
                <div className="lg:w-1/2 w-full lg:flex flex-col bg-gray-100 sm:px-8 sm:py-4 p-2 m-2 justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-gray-700 font-medium">Eco-Friendly Products For Shops</h1> <br />
                    <p className='md:text-xl text-base'>Nature&apos;s nook supplies businesses in over 30 countries with our range of best-selling products.</p>
                    <br />
                    <p className='md:text-xl text-base'>Partner with us and take advantage of our stunning product photography, gain access to our keyword SEO research and expose your business to our 200k+ monthly social media followers.</p>
                    <br />
                    <Button
                        className='w-max'
                        variant="outlined"
                        onClick={() => navigate("/product")}
                        sx={{
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#036570',
                                color: '#fff',
                                borderColor: '#036570',
                            },
                        }}
                    >
                        Eco Products
                    </Button>
                </div>
                <div className="lg:w-1/2 w-full lg:flex m-2">
                    <img src={img1} alt="" className='w-full' />
                </div>
            </div>
            <div className="lg:w-4/5 w-11/12 mx-auto lg:flex lg:flex-row flex flex-col-reverse">
                <div className="lg:w-1/2 w-full lg:flex m-2">
                    <img src={img2} alt="" className='w-full' />
                </div>
                <div className="lg:w-1/2 w-full lg:flex flex-col bg-gray-100 sm:px-8 sm:py-4 p-2 m-2 justify-center" data-aos="fade-up">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-gray-700 font-medium">Custom Eco-Friendly Products</h1> <br />
                    <p className='md:text-xl text-base'>Our experienced design team based in the UK will work with you to create unique, high-quality bespoke products that reflect your brand’s eco credentials and inspire your customers to share your message.</p>
                    <br />
                    <p className='md:text-xl text-base'>We engrave onto bamboo straws, coconut bowls, cutlery and more. Being based in the UK means that we can offer fast and reliable worldwide shipping for your peace of mind.</p>
                    <br />
                    <Button
                        className='w-max'
                        variant="outlined"
                        onClick={() => navigate("/product/custom")}
                        sx={{
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#036570',
                                color: '#fff',
                                borderColor: '#036570',
                            },
                        }}
                    >
                        Custom Eco Products
                    </Button>
                </div>
            </div>
            <div className="lg:w-4/5 w-11/12 mx-auto lg:flex" data-aos="fade-up">
                <div className="lg:w-1/2 w-full lg:flex flex-col bg-gray-100 sm:px-8 sm:py-4 p-2 m-2 justify-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-gray-700 font-medium">Zero Waste Swaps</h1> <br />
                    <p className='md:text-xl text-base'>Start your journey towards a zerowaste lifestyle today. Join our tribe on social media and show us how you’re using our products! #nature&apos;snook</p>
                    <br />
                    <Button
                        className='w-max'
                        variant="outlined"
                        onClick={() => navigate("/product/:zerowaste")}
                        sx={{
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#036570',
                                color: '#fff',
                                borderColor: '#036570',
                            },
                        }}
                    >
                        Zero Waste Products
                    </Button>
                </div>
                <div className="lg:w-1/2 w-full lg:flex m-2">
                    <img src={img3} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
}