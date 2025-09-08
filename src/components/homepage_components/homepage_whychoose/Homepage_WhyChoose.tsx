import { useState, useEffect } from 'react';
import img2 from '../../../assets/loki/img_12.jpeg';
import img1 from '../../../assets/shaunnie/img_15.jpeg';
import { MdOutlineDone } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const featureData = {
    images: [img1, img2], // replace with actual images of Blue Door Homes
    title: "Why Choose Blue Door Homes?",
    description:
        "At Blue Door Homes, we believe a stay should feel like a story worth remembering. With thoughtfully designed spaces, warm hospitality, and prime locations, we create homes that are as inviting as they are stylish.",
    features: [
        {
            title: "Thoughtfully Designed Spaces",
            description:
                "Each property reflects a perfect mix of comfort and elegance, offering cozy interiors and a welcoming atmosphere."
        },
        {
            title: "Personalized Hospitality",
            description:
                "From the moment you arrive, our attentive team ensures your stay is smooth, stress-free, and tailored to your needs."
        },
        {
            title: "Prime Ulwe Location",
            description:
                "Our homes at Mitra Samuh Apartments, Morave Road, Sector 3, Ulwe, place you right where convenience meets comfort."
        },
        {
            title: "Affordable Luxury",
            description:
                "Enjoy beautifully curated homes and premium amenities without compromising on value for money."
        }
    ]
};


const Homepage_WhyChoose = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % featureData.features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Side - Images */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:-translate-y-2">
                            <img src={img1} alt="Luxury accommodation" className="w-full h-80 lg:h-96 object-cover" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                        <img
                            src={img2}
                            alt="Garden swing area"
                            className="w-56 sm:w-64 absolute -bottom-8 -right-6 sm:right-0 lg:-right-8 rounded-xl shadow-2xl object-cover border-4 border-white z-20 transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 relative mb-4">
                            {featureData.title}
                            <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-primary rounded-full"></span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{featureData.description}</p>

                        {/* Features List */}
                        <div className="space-y-5 mb-10">
                            {featureData.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-4 border-l-4 ${activeFeature === index
                                        ? 'bg-white shadow-lg border-primary'
                                        : 'border-transparent hover:bg-white hover:shadow-md'
                                        }`}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <div
                                        className={`p-2 rounded-full ${activeFeature === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                                            }`}
                                    >
                                        <MdOutlineDone className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-gray-600 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition duration-300 hover:bg-primary-dark hover:shadow-lg transform hover:-translate-y-1"
                            >
                                <span>Contact Us</span>
                                <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage_WhyChoose;
